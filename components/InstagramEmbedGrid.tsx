"use client";

import { useEffect } from "react";
import Script from "next/script";

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

function processEmbeds() {
  try {
    window.instgrm?.Embeds?.process?.();
  } catch {
    // Instagram's embed script occasionally isn't fully initialized yet;
    // failing silently here is safe since the fallback link still works.
  }
}

export default function InstagramEmbedGrid({ urls }: InstagramEmbedGridProps) {
  useEffect(() => {
    processEmbeds();
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
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
        onReady={processEmbeds}
      />
    </div>
  );
}

