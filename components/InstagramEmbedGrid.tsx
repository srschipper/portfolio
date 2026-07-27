"use client";

import { useEffect, useRef } from "react";

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

function processEmbeds(onDone?: () => void) {
  let cancelled = false;
  let attempts = 0;

  const tryProcess = () => {
    if (cancelled) return;
    try {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
        onDone?.();
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
}

function InstagramBlockquote({ url }: { url: string }) {
  // We hand this div's contents to Instagram's embed script, which replaces
  // the blockquote with an iframe. React must never re-render or reconcile
  // that content afterward (it would try to diff against DOM nodes that no
  // longer exist in the shape React expects), so we set the HTML once via a
  // ref and never give React any declarative children for this container.
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;
    initialized.current = true;
    containerRef.current.innerHTML = `
      <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="max-width:340px;min-width:300px;width:100%">
        <a href="${url}" target="_blank" rel="noopener noreferrer">View on Instagram</a>
      </blockquote>
    `;
    processEmbeds();
  }, [url]);

  return <div ref={containerRef} />;
}

export default function InstagramEmbedGrid({ urls }: InstagramEmbedGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {urls.map((url) => (
        <InstagramBlockquote key={url} url={url} />
      ))}
    </div>
  );
}
