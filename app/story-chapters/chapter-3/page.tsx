import PasswordGate from "@/components/PasswordGate";
import { chapterPasswords } from "@/lib/passwords";

export default function Chapter3Page() {
  return (
    <PasswordGate password={chapterPasswords["chapter-3"]}>
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-black text-4xl font-bold uppercase text-[#ff7d25]">
        Chapter 3
      </div>
    </PasswordGate>
  );
}
