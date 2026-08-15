import PasswordGate from "@/components/PasswordGate";
import VideoModal from "@/components/VideoModal";
import { chapterPasswords } from "@/lib/passwords";

export default function Chapter2Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-2"]}
      placeholder="enter launch code"
    >
      <div
        className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url(https://umnqakvebzkowroi.public.blob.vercel-storage.com/Images/chapter%202%20bg.jpg)",
        }}
      >
        <div className="text-center text-2xl font-bold uppercase text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-3xl md:text-4xl">
          Chapter 2 - BRITTLE HOLLOW & HOLLOWS LANTERN
        </div>
        <div className="flex flex-col items-center gap-6">
          <VideoModal label="Intro Message" videoId="dQw4w9WgXcQ" />
          <button className="border border-[#ff7d25] px-10 py-3 text-2xl font-bold uppercase text-[#ff7d25] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Map
          </button>
        </div>
      </div>
    </PasswordGate>
  );
}
