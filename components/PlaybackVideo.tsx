"use client";

import { useEffect, useRef } from "react";
import { usePlayback } from "@/components/PlaybackProvider";

export default function PlaybackVideo({ src }: { src: string }) {
  const started = usePlayback();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (started) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [started]);

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        started ? "opacity-100" : "opacity-0"
      }`}
      src={src}
      loop
      muted
      playsInline
    />
  );
}
