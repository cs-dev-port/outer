import PasswordGate from "@/components/PasswordGate";
import { chapterPasswords } from "@/lib/passwords";

export default function Chapter2Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-2"]}
      placeholder="enter launch code"
    >
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-black text-4xl font-bold uppercase text-[#ff7d25]">
        Chapter 2
      </div>
    </PasswordGate>
  );
}
