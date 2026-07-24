"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectGallery as ProjectGalleryType } from "@/lib/types";

interface ProjectGalleryProps {
  galleries: ProjectGalleryType[];
}

export default function ProjectGallery({ galleries }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
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
            <div
              className="h-56 overflow-hidden rounded-lg border border-border bg-border/20 sm:h-64"
              style={{ aspectRatio: `${img.width} / ${img.height}` }}
            >
              <Image
                src={img.src}
                alt={img.caption ?? `${active.label} sample`}
                width={img.width}
                height={img.height}
                className="h-full w-full object-cover"
              />
            </div>
            {img.caption && (
              <span className="text-center text-xs font-medium uppercase tracking-wide text-muted">
                {img.caption}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
