"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_SRC =
  "https://umnqakvebzkowroi.public.blob.vercel-storage.com/main-ost.m4a";

export default function SiteMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    const tryStart = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };

    const handleFirstInteraction = () => {
      tryStart();
    };

    document.addEventListener("pointerdown", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return () => {
      document.removeEventListener("pointerdown", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 z-50 border border-[#ff7d25] bg-black px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#ff7d25]"
    >
      {playing ? "Mute Music" : "Play Music"}
    </button>
  );
}
