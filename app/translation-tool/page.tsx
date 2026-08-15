"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import jsQR from "jsqr";

const FOUND_CHIME_SRC = "/code-sound.wav";

export default function TranslationToolPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chimeRef = useRef<HTMLAudioElement | null>(null);
  const scanningRef = useRef(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("Scanning...");

  useEffect(() => {
    const chime = new Audio(FOUND_CHIME_SRC);
    chime.preload = "auto";
    chime.load();
    chimeRef.current = chime;
  }, []);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let frameId: number;
    let navigateTimeout: ReturnType<typeof setTimeout>;

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
        const ctx = canvas.getContext("2d", { willReadFrequently: true });

        if (ctx) {
          try {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(
              0,
              0,
              canvas.width,
              canvas.height,
            );
            const code = jsQR(
              imageData.data,
              imageData.width,
              imageData.height,
            );

            if (code) {
              handleScan(code.data);
            }
          } catch (err) {
            setStatus(
              `Scan error: ${err instanceof Error ? err.message : String(err)}`,
            );
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

      const match = url.pathname.match(/^\/translation-tool\/([^/]+)\/?$/);
      if (!match) {
        setStatus(`Detected non-matching code: ${data}`);
        return;
      }

      scanningRef.current = false;
      setStatus(`Found: ${match[1]}`);

      const chime = chimeRef.current;
      if (chime) {
        chime.currentTime = 0;
        chime.play().catch(() => {});
      }

      navigateTimeout = setTimeout(() => {
        router.push(url.pathname);
      }, 500);
    };

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then((mediaStream) => {
        stream = mediaStream;
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.play().catch(() => {});
        }
        frameId = requestAnimationFrame(scanFrame);
      })
      .catch((err) => {
        setError(
          err instanceof Error ? err.message : "Unable to access camera",
        );
      });

    return () => {
      scanningRef.current = false;
      cancelAnimationFrame(frameId);
      clearTimeout(navigateTimeout);
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, [router]);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
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
      {!error && (
        <div
          className="absolute bottom-12 rounded px-6 py-3 text-center text-sm uppercase tracking-widest text-white"
          style={{
            background: "radial-gradient(circle, #2e9589, black)",
          }}
        >
          {status}
        </div>
      )}
    </div>
  );
}
