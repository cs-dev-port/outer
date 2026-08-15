"use client";

import { useState } from "react";

export default function VideoModal({
  label,
  videoId,
}: {
  label: string;
  videoId: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border border-[#ff7d25] px-10 py-3 text-2xl font-bold uppercase text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative aspect-video w-full max-w-3xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-2xl font-bold uppercase text-[#ff7d25]"
            >
              Close
            </button>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={label}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
