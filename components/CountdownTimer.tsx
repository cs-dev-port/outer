"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ target }: { target: Date }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  const units = [
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-8">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="text-3xl font-bold text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-5xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-widest text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-sm">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
