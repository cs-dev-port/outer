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
    <div className="flex gap-[3vw]">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-bold text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-[clamp(1.25rem,6vh,3.5rem)]">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="uppercase tracking-widest text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-[clamp(0.55rem,1.5vh,0.9rem)]">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
