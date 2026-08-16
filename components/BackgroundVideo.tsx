"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("canplaythrough", tryPlay);

    const retryInterval = setInterval(tryPlay, 1000);

    document.addEventListener("touchstart", tryPlay, { passive: true });
    document.addEventListener("pointerdown", tryPlay);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("canplaythrough", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("pointerdown", tryPlay);
      clearInterval(retryInterval);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      controls={false}
    />
  );
}
