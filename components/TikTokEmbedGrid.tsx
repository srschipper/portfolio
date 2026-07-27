"use client";

import { useEffect, useRef } from "react";

interface TikTokEmbedGridProps {
  urls: string[];
}

function extractId(url: string): string {
  const match = url.match(/\/(video|photo)\/(\d+)/);
  return match ? match[2] : "";
}

export default function TikTokEmbedGrid({ urls }: TikTokEmbedGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TikTok's embed.js only converts blockquotes present in the DOM at the
    // moment it first runs. Since this component can mount after that (e.g.
    // switching tabs, or a second TikTok embed elsewhere on the page already
    // triggered the load), we inject a fresh, cache-busted script tag every
    // time this mounts so TikTok re-scans the page and renders these embeds.
    const script = document.createElement("script");
    script.src = `https://www.tiktok.com/embed.js?_=${Date.now()}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [urls]);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-6">
      {urls.map((url) => {
        const videoId = extractId(url);
        return (
          <blockquote
            key={url}
            className="tiktok-embed"
            cite={url}
            data-video-id={videoId}
            style={{ maxWidth: "325px", minWidth: "325px" }}
          >
            <section>
              <a target="_blank" rel="noopener noreferrer" href={url}>
                View on TikTok
              </a>
            </section>
          </blockquote>
        );
      })}
    </div>
  );
}
