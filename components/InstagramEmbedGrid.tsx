"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

interface InstagramEmbedGridProps {
  urls: string[];
}

export default function InstagramEmbedGrid({ urls }: InstagramEmbedGridProps) {
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const tryProcess = () => {
      if (cancelled) return;
      try {
        if (window.instgrm?.Embeds?.process) {
          window.instgrm.Embeds.process();
          return;
        }
      } catch {
        // fall through to retry
      }
      attempts += 1;
      if (attempts < 30) {
        setTimeout(tryProcess, 150);
      }
    };

    tryProcess();

    return () => {
      cancelled = true;
    };
  }, [urls]);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {urls.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ maxWidth: "340px", minWidth: "300px", width: "100%" }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </blockquote>
      ))}
    </div>
  );
}
