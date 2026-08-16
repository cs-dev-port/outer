"use client";

import { useEffect, useRef } from "react";
import { useVideoUnlocked } from "@/components/PlaybackProvider";

export default function PlaybackVideo({ src }: { src: string }) {
  const unlocked = useVideoUnlocked();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (unlocked) {
      videoRef.current?.play().catch(() => {});
    }
  }, [unlocked]);

  return (
    <video
      ref={videoRef}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        unlocked ? "opacity-100" : "opacity-0"
      }`}
      src={src}
      loop
      muted
      playsInline
    />
  );
}
