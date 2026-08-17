"use client";

import { useEffect, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
const PRE_SCRAMBLE_FRAMES = 12;
const TICK_MS = 50;

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

function scramble(text: string, revealCount: number) {
  return text
    .split("")
    .map((char, index) => {
      if (char === " " || char === "\n") return char;
      return index < revealCount ? char : randomChar();
    })
    .join("");
}

export default function ScrambleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [display, setDisplay] = useState(() => scramble(text, 0));

  useEffect(() => {
    let frame = 0;
    setDisplay(scramble(text, 0));

    const interval = setInterval(() => {
      frame += 1;
      const revealCount = Math.max(0, frame - PRE_SCRAMBLE_FRAMES);
      setDisplay(scramble(text, revealCount));

      if (revealCount >= text.length) {
        clearInterval(interval);
      }
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className={className} style={{ whiteSpace: "pre-line" }}>
      {display}
    </p>
  );
}
