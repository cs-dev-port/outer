"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export default function PasswordGate({
  password,
  placeholder = "Enter code",
  children,
}: {
  password: string;
  placeholder?: string;
  children: ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (input.toUpperCase() === password.toUpperCase()) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 border border-[#ff7d25] px-10 py-8"
      >
        <div className="text-2xl font-bold uppercase text-[#ff7d25]">
          Enter Code
        </div>
        <input
          type="password"
          placeholder={placeholder}
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setError(false);
          }}
          autoFocus
          className="w-64 border border-[#ff7d25] bg-black px-4 py-2 text-center text-[#ff7d25] outline-none"
        />
        <button
          type="submit"
          className="border border-[#ff7d25] px-6 py-2 text-lg font-bold uppercase text-[#ff7d25]"
        >
          Submit
        </button>
        {error && (
          <div className="text-sm uppercase text-red-500">Incorrect code</div>
        )}
      </form>
    </div>
  );
}
