import PasswordGate from "@/components/PasswordGate";
import CountdownTimer from "@/components/CountdownTimer";
import { chapterPasswords } from "@/lib/passwords";

const SUPERNOVA_DATE = new Date(2026, 7, 18, 20, 0, 0);

export default function Chapter1Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-1"]}
      placeholder="code = your name"
    >
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black px-4">
        <div className="text-center text-2xl font-bold uppercase text-[#ff7d25] sm:text-3xl md:text-4xl">
          The world is going super nova in:
        </div>
        <CountdownTimer target={SUPERNOVA_DATE} />
        <div className="text-center text-lg font-bold uppercase text-[#ff7d25] sm:text-xl md:text-2xl">
          Find the launch codes before then or it&apos;s game over.
        </div>
        <div className="text-center text-sm uppercase text-[#ff7d25]">
          Use the translation tool to track Nomai writings and find the launch
          codes.
        </div>
      </div>
    </PasswordGate>
  );
}
