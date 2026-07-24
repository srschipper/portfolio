"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage, ProjectGallery as ProjectGalleryType } from "@/lib/types";

interface ProjectGalleryProps {
  galleries: ProjectGalleryType[];
}

export default function ProjectGallery({ galleries }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const active = galleries[activeIndex];

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
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                index === activeIndex
                  ? "bg-accent text-white"
                  : "bg-border/40 text-muted hover:bg-border/70 hover:text-foreground"
              }`}
            >
              {gallery.label}
            </button>
          ))}
        </div>
      )}
      <div className="mt-4 flex flex-wrap items-start gap-3">
        {active.images.map((img) => (
          <div key={img.src} className="flex flex-col gap-2">
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
