"use client";

import { useEffect } from "react";

interface InstagramEmbedGridProps {
  urls: string[];
}

export default function InstagramEmbedGrid({ urls }: InstagramEmbedGridProps) {
  useEffect(() => {
    // Instagram's embed.js scans the page for .instagram-media blockquotes
    // and renders them the moment it loads. Since this component can mount
    // after that initial load (switching tabs, or another Instagram embed
    // elsewhere on the page already triggered it), we inject a fresh,
    // cache-busted script tag every time this mounts so Instagram re-scans
    // the page and renders these specific embeds.
    const script = document.createElement("script");
    script.src = `https://www.instagram.com/embed.js?_=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {
        // Script may already be gone; nothing to clean up.
      }
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
