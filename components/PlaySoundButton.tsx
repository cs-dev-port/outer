"use client";

import { useRef, useState } from "react";

export default function PlaySoundButton({
  label,
  soundSrc,
}: {
  label: string;
  soundSrc: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(soundSrc);
      audioRef.current.onended = () => setPlaying(false);
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setPlaying(true);
  };

  return (
    <button
      onClick={handleClick}
      className="border border-[#ff7d25] px-10 py-3 text-2xl font-bold uppercase text-[#ff7d25]"
    >
      {playing ? "Playing..." : label}
    </button>
  );
}
