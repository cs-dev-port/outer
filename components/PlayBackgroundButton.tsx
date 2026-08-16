"use client";

import { useEffect, useRef, useState } from "react";

const UNLOCK_KEY = "outer-bg-unlocked";

export default function PlayBackgroundButton({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (sessionStorage.getItem(UNLOCK_KEY) === "true") {
      video
        .play()
        .then(() => setStarted(true))
        .catch(() => {});
    }
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
    setStarted(true);
    sessionStorage.setItem(UNLOCK_KEY, "true");
  };

  return (
    <>
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
      {!started && (
        <button
          onClick={handlePlay}
          className="fixed bottom-4 left-4 z-50 border border-[#ff7d25] bg-black px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#ff7d25]"
        >
          Play BG
        </button>
      )}
    </>
  );
}
