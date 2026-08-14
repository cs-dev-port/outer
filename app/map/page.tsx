"use client";

import { useEffect, useRef, useState } from "react";
import { places, calculateBearing, angularDifference } from "@/lib/geo";

const FACING_THRESHOLD_DEG = 15;
const SOUND_SRC = "/signal-sound.m4a";

type Coords = { lat: number; lng: number };

type DeviceOrientationEventWithCompass = DeviceOrientationEvent & {
  webkitCompassHeading?: number;
};

type DeviceOrientationEventConstructorWithPermission =
  typeof DeviceOrientationEvent & {
    requestPermission?: () => Promise<"granted" | "denied">;
  };

export default function MapPage() {
  const [position, setPosition] = useState<Coords | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [compassEnabled, setCompassEnabled] = useState(false);
  const facingRef = useRef<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(SOUND_SRC);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported on this device");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (!compassEnabled) return;

    const handleOrientation = (event: DeviceOrientationEventWithCompass) => {
      if (typeof event.webkitCompassHeading === "number") {
        setHeading(event.webkitCompassHeading);
      } else if (event.alpha !== null) {
        setHeading(360 - event.alpha);
      }
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, [compassEnabled]);

  useEffect(() => {
    if (!position || heading === null) return;

    const facingPlace = places.find((place) => {
      const bearing = calculateBearing(position, place);
      return angularDifference(heading, bearing) <= FACING_THRESHOLD_DEG;
    });

    const facingName = facingPlace?.name ?? null;

    if (facingName && facingName !== facingRef.current) {
      audioRef.current?.play().catch(() => {});
    }

    facingRef.current = facingName;
  }, [position, heading]);

  const requestCompass = async () => {
    const DeviceOrientationEventCtor =
      window.DeviceOrientationEvent as DeviceOrientationEventConstructorWithPermission;

    if (typeof DeviceOrientationEventCtor?.requestPermission === "function") {
      try {
        const result = await DeviceOrientationEventCtor.requestPermission();
        if (result === "granted") {
          setCompassEnabled(true);
        } else {
          setError("Compass permission denied");
        }
      } catch {
        setError("Compass permission denied");
      }
    } else {
      setCompassEnabled(true);
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden bg-black text-[#ff7d25]">
      <div className="text-4xl font-bold uppercase">Map</div>

      {!compassEnabled && (
        <button
          onClick={requestCompass}
          className="rounded border border-[#ff7d25] px-6 py-2 text-lg uppercase"
        >
          Enable Compass
        </button>
      )}

      <div className="text-center text-sm uppercase">
        {position
          ? `Lat ${position.lat.toFixed(4)}, Lng ${position.lng.toFixed(4)}`
          : "Locating..."}
        <br />
        {heading !== null ? `Heading ${heading.toFixed(0)}°` : "No heading data"}
      </div>

      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
}
