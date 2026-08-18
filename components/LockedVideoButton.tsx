"use client";

import { useState, type FormEvent } from "react";
import { MASTER_KEY } from "@/lib/passwords";

export default function LockedVideoButton({
  label,
  password,
  videoId,
  placeholder = "Enter code",
}: {
  label: string;
  password: string;
  videoId: string;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const close = () => {
    setOpen(false);
    setUnlocked(false);
    setInput("");
    setError(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const normalizedInput = input.toUpperCase();

    if (
      normalizedInput === password.toUpperCase() ||
      normalizedInput === MASTER_KEY.toUpperCase()
    ) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border border-[#ff7d25] px-10 py-3 text-2xl font-bold uppercase text-[#ff7d25]"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-2xl font-bold uppercase text-[#ff7d25]"
            >
              Close
            </button>

            {!unlocked ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex w-fit flex-col items-center gap-4 border border-[#ff7d25] bg-black px-10 py-8"
              >
                <div className="text-2xl font-bold uppercase text-[#ff7d25]">
                  Enter Code
                </div>
                <input
                  type="text"
                  placeholder={placeholder}
                  value={input}
                  onChange={(event) => {
                    setInput(event.target.value);
                    setError(false);
                  }}
                  autoFocus
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                  className="w-64 border border-[#ff7d25] bg-black px-4 py-2 text-center text-[#ff7d25] outline-none"
                />
                <button
                  type="submit"
                  className="border border-[#ff7d25] px-6 py-2 text-lg font-bold uppercase text-[#ff7d25]"
                >
                  Submit
                </button>
                {error && (
                  <div className="text-sm uppercase text-red-500">
                    Incorrect code
                  </div>
                )}
              </form>
            ) : (
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={label}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
