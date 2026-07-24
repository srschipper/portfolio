"use client";

import Script from "next/script";

interface TikTokEmbedGridProps {
  urls: string[];
}

function extractId(url: string): string {
  const match = url.match(/\/(video|photo)\/(\d+)/);
  return match ? match[2] : "";
}

export default function TikTokEmbedGrid({ urls }: TikTokEmbedGridProps) {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {urls.map((url) => {
          const videoId = extractId(url);
          return (
            <blockquote
              key={url}
              className="tiktok-embed"
              cite={url}
              data-video-id={videoId}
              style={{ maxWidth: "100%", minWidth: 0 }}
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
      <Script async src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
