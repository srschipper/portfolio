"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import EmbedErrorBoundary from "@/components/EmbedErrorBoundary";
import InstagramEmbedGrid from "@/components/InstagramEmbedGrid";
import TikTokEmbedGrid from "@/components/TikTokEmbedGrid";
import type { GalleryImage, ProjectGallery as ProjectGalleryType } from "@/lib/types";

interface ProjectGalleryProps {
  galleries: ProjectGalleryType[];
  accentColor?: string;
}

export default function ProjectGallery({ galleries, accentColor = "var(--accent)" }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const active = galleries[activeIndex];

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  const linkCards = active.links?.map((link) => (
    <a
      key={link.url}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-[var(--link-accent)]"
      style={{ ["--link-accent" as string]: accentColor }}
    >
      <span
        className="mt-1 h-full w-1 shrink-0 self-stretch rounded-full"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      <span className="flex-1">
        <span className="block font-mono text-xs font-medium uppercase tracking-wider text-muted">
          {link.source}
        </span>
        <span className="mt-1 block font-display text-lg font-semibold text-foreground group-hover:text-[var(--link-accent)]">
          {link.title}
        </span>
        {link.description && <span className="mt-1 block text-sm text-muted">{link.description}</span>}
      </span>
      <span
        className="mt-1 shrink-0 text-lg text-muted transition-transform group-hover:translate-x-1 group-hover:text-[var(--link-accent)]"
        aria-hidden="true"
      >
        &rarr;
      </span>
    </a>
  ));

  return (
    <div>
      {galleries.length > 1 && (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {galleries.map((gallery, index) => (
            <button
              key={gallery.label}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              style={index === activeIndex ? { backgroundColor: accentColor } : undefined}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                index === activeIndex
                  ? "text-white"
                  : "bg-border/40 text-muted hover:bg-border/70 hover:text-foreground"
              }`}
            >
              {gallery.label}
            </button>
          ))}
        </div>
      )}

      {active.tiktokEmbeds && (
        <div className="mt-4">
          <EmbedErrorBoundary>
            <TikTokEmbedGrid urls={active.tiktokEmbeds} />
          </EmbedErrorBoundary>
        </div>
      )}

      {active.brands && (
        <div className="mt-4 flex flex-wrap gap-2">
          {active.brands.map((brand) => (
            <span
              key={brand}
              className="rounded-full border border-border bg-card px-4 py-1.5 font-display text-sm font-medium text-foreground"
            >
              {brand}
            </span>
          ))}
        </div>
      )}

      {active.instagramEmbeds && active.links ? (
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start">
          <div className="flex justify-start md:shrink-0">
            <EmbedErrorBoundary>
              <InstagramEmbedGrid urls={active.instagramEmbeds} />
            </EmbedErrorBoundary>
          </div>
          <div className="flex flex-1 flex-col gap-3">{linkCards}</div>
        </div>
      ) : (
        <>
          {active.instagramEmbeds && (
            <div className="mt-4">
              <EmbedErrorBoundary>
                <InstagramEmbedGrid urls={active.instagramEmbeds} />
              </EmbedErrorBoundary>
            </div>
          )}
          {active.links && <div className="mt-4 flex flex-col gap-3">{linkCards}</div>}
        </>
      )}

      {active.images && (
        <div className="relative mt-4">
          <div
            ref={scrollRef}
            className="flex items-start gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {active.images.map((img) => (
              <div key={img.src} className="flex shrink-0 flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setLightboxImage(img)}
                  className="h-56 cursor-zoom-in overflow-hidden rounded-lg border border-border bg-border/20 transition-opacity hover:opacity-90 sm:h-64"
                  style={{ aspectRatio: `${img.width} / ${img.height}` }}
                  aria-label={`Expand ${img.caption ?? active.label} image`}
                >
                  <Image
                    src={img.src}
                    alt={img.caption ?? `${active.label} sample`}
                    width={img.width}
                    height={img.height}
                    className="h-full w-full object-cover"
                  />
                </button>
                {img.caption && (
                  <span className="text-center text-xs font-medium uppercase tracking-wide text-muted">
                    {img.caption}
                  </span>
                )}
              </div>
            ))}
          </div>
          {active.images.length > 3 && (
            <>
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="absolute -left-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-border/40 sm:flex"
              >
                &#8592;
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="absolute -right-3 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-border/40 sm:flex"
              >
                &#8594;
              </button>
            </>
          )}
        </div>
      )}

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute right-6 top-6 text-3xl leading-none text-white/80 hover:text-white"
            aria-label="Close"
          >
            &times;
          </button>
          <Image
            src={lightboxImage.src}
            alt={lightboxImage.caption ?? "Expanded project image"}
            width={lightboxImage.width}
            height={lightboxImage.height}
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
