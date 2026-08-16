"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const MUSIC_SRC =
  "https://umnqakvebzkowroi.public.blob.vercel-storage.com/main-ost.m4a";

const VideoUnlockedContext = createContext(false);

export function useVideoUnlocked() {
  return useContext(VideoUnlockedContext);
}

export default function PlaybackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [videoUnlocked, setVideoUnlocked] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setVideoUnlocked(true);

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
    } else {
      audio.play().catch(() => {});
      setMusicPlaying(true);
    }
  };

  return (
    <VideoUnlockedContext.Provider value={videoUnlocked}>
      {children}
      <button
        onClick={toggle}
        className="fixed bottom-4 right-4 z-50 border border-[#ff7d25] bg-black px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#ff7d25]"
      >
        {musicPlaying ? "Stop" : "Start"}
      </button>
    </VideoUnlockedContext.Provider>
  );
}
