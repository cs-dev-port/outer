import PasswordGate from "@/components/PasswordGate";
import { chapterPasswords } from "@/lib/passwords";

export default function Chapter4Page() {
  return (
    <PasswordGate password={chapterPasswords["chapter-4"]}>
      <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-black text-4xl font-bold uppercase text-[#ff7d25]">
        Chapter 4
      </div>
    </PasswordGate>
  );
}
