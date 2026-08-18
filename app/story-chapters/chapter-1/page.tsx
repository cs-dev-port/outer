import PasswordGate from "@/components/PasswordGate";
import CountdownTimer from "@/components/CountdownTimer";
import { chapterPasswords } from "@/lib/passwords";

const SUPERNOVA_DATE = new Date(2026, 7, 18, 19, 47, 0);

export default function Chapter1Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-1"]}
      placeholder="code = your name"
    >
      <div
        className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url(https://umnqakvebzkowroi.public.blob.vercel-storage.com/Images/chap1-bg.png)",
        }}
      >
        <div className="flex max-h-full max-w-full flex-col items-center overflow-hidden bg-black px-[3vw] py-[2vh] gap-[1.5vh]">
          <div className="text-center font-bold uppercase text-[#ff7d25] text-[clamp(0.9rem,4.5vh,2.5rem)]">
            CHAPTER 1
            <br />
            TIMBER HEARTH
          </div>
          <div className="text-center font-bold uppercase text-[#ff7d25] text-[clamp(0.8rem,3.5vh,2.5rem)]">
            The world is going super nova in:
          </div>
          <CountdownTimer target={SUPERNOVA_DATE} />
          <div className="text-center font-bold uppercase text-[#ff7d25] text-[clamp(0.7rem,2.5vh,1.5rem)]">
            Find the launch codes before then or it&apos;s game over.
          </div>
          <div className="text-center uppercase text-[#ff7d25] text-[clamp(0.6rem,1.8vh,0.9rem)]">
            Use the translation tool to track Nomai writings and find the
            launch codes.
          </div>
        </div>
      </div>
    </PasswordGate>
  );
}
