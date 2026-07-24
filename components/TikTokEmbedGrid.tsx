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
    <div>
      <div className="flex flex-wrap justify-center gap-6">
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
      <Script async src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
