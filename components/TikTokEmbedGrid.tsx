"use client";

import { useEffect, useRef } from "react";

interface TikTokEmbedGridProps {
  urls: string[];
}

function extractId(url: string): string {
  const match = url.match(/\/(video|photo)\/(\d+)/);
  return match ? match[2] : "";
}

function TikTokBlockquote({ url }: { url: string }) {
  // Same reasoning as the Instagram component: TikTok's embed script replaces
  // this blockquote with an iframe, so React must never manage or reconcile
  // this container's children after the initial insert.
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;
    const videoId = extractId(url);
    containerRef.current.innerHTML = `
      <blockquote class="tiktok-embed" cite="${url}" data-video-id="${videoId}" style="max-width:325px;min-width:325px">
        <section><a target="_blank" rel="noopener noreferrer" href="${url}">View on TikTok</a></section>
      </blockquote>
    `;
  }, [url]);

  return <div ref={containerRef} />;
}

export default function TikTokEmbedGrid({ urls }: TikTokEmbedGridProps) {
  useEffect(() => {
    // TikTok has no documented "reprocess" API, so we trigger a fresh,
    // cache-busted script load to make it re-scan the page for any
    // not-yet-processed .tiktok-embed blockquotes (including these).
    const script = document.createElement("script");
    script.src = `https://www.tiktok.com/embed.js?_=${Date.now()}`;
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
        <TikTokBlockquote key={url} url={url} />
      ))}
    </div>
  );
}
