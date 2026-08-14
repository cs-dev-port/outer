"use client";

import { useEffect, useRef, useState } from "react";

export default function SignalScopePage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((mediaStream) => {
        stream = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unable to access camera");
      });

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <div className="relative flex aspect-video w-[854px] max-w-[90vw] items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="h-full w-full object-cover"
        />
        {error && (
          <div className="absolute text-2xl font-bold uppercase text-[#ff7d25]">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
