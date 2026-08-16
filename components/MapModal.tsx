"use client";

import { useRef, useState } from "react";

const OPEN_SOUND_SRC = "/MapZoomOut_Tone.wav";

export default function MapModal({
  label,
  src,
}: {
  label: string;
  src: string;
}) {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    setOpen(true);

    if (!audioRef.current) {
      audioRef.current = new Audio(OPEN_SOUND_SRC);
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="border border-[#ff7d25] px-10 py-3 text-2xl font-bold uppercase text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative aspect-[4/3] w-full max-w-3xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-2xl font-bold uppercase text-[#ff7d25]"
            >
              Close
            </button>
            <iframe
              className="h-full w-full"
              src={src}
              title={label}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
