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

const PlaybackContext = createContext(false);

export function usePlayback() {
  return useContext(PlaybackContext);
}

export default function PlaybackProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);

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

    if (started) {
      audio.pause();
      setStarted(false);
    } else {
      audio.play().catch(() => {});
      setStarted(true);
    }
  };

  return (
    <PlaybackContext.Provider value={started}>
      {children}
      <button
        onClick={toggle}
        className="fixed bottom-4 right-4 z-50 border border-[#ff7d25] bg-black px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#ff7d25]"
      >
        {started ? "Stop" : "Start"}
      </button>
    </PlaybackContext.Provider>
  );
}
