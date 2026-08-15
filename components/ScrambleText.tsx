"use client";

import { useEffect, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

function scramble(text: string, revealCount: number) {
  return text
    .split("")
    .map((char, index) => {
      if (char === " ") return " ";
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
    let revealCount = 0;
    setDisplay(scramble(text, 0));

    const interval = setInterval(() => {
      revealCount += 1;
      setDisplay(scramble(text, revealCount));

      if (revealCount >= text.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <p className={className}>{display}</p>;
}
