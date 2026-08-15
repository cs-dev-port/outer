"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import jsQR from "jsqr";

export default function TranslationToolPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scanningRef = useRef(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("Scanning for QR code...");

  useEffect(() => {
    let stream: MediaStream | null = null;
    let frameId: number;

    const scanFrame = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      if (
        scanningRef.current &&
        video &&
        canvas &&
        video.readyState === video.HAVE_ENOUGH_DATA
      ) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code) {
            handleScan(code.data);
          }
        }
      }

      frameId = requestAnimationFrame(scanFrame);
    };

    const handleScan = (data: string) => {
      let url: URL;
      try {
        url = new URL(data, window.location.origin);
      } catch {
        return;
      }

      const match = url.pathname.match(/^\/translation-tool\/([^/]+)$/);
      if (!match) {
        return;
      }

      scanningRef.current = false;
      setStatus(`Found: ${match[1]}`);
      router.push(url.pathname);
    };

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((mediaStream) => {
        stream = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
        frameId = requestAnimationFrame(scanFrame);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Unable to access camera");
      });

    return () => {
      scanningRef.current = false;
      cancelAnimationFrame(frameId);
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, [router]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-black">
      <div className="relative flex aspect-video w-[854px] max-w-[90vw] items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="h-full w-full object-cover"
        />
        <canvas ref={canvasRef} className="hidden" />
        {error && (
          <div className="absolute text-2xl font-bold uppercase text-[#ff7d25]">
            {error}
          </div>
        )}
      </div>
      {!error && (
        <div className="text-sm uppercase tracking-widest text-[#ff7d25]">
          {status}
        </div>
      )}
    </div>
  );
}
