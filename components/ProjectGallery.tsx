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
    <div className="mt-5">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {galleries.map((gallery, index) => (
          <button
            key={gallery.label}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            onClick={() => setActiveIndex(index)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              index === activeIndex
                ? "bg-accent text-white"
                : "bg-border/40 text-muted hover:bg-border/70 hover:text-foreground"
            }`}
          >
            {gallery.label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {active.images.map((src) => (
          <div
            key={src}
            className="relative aspect-square overflow-hidden rounded-lg border border-border bg-border/30"
          >
            <Image
              src={src}
              alt={`${active.label} sample`}
              fill
              sizes="(max-width: 640px) 33vw, 160px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
