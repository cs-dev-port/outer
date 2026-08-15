import PasswordGate from "@/components/PasswordGate";
import VideoModal from "@/components/VideoModal";
import { chapterPasswords } from "@/lib/passwords";

const VIDEO_ID = "dQw4w9WgXcQ";

export default function Chapter4Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-4"]}
      placeholder="code = da-_ _ _"
      hint="location name"
    >
      <div
        className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url(https://umnqakvebzkowroi.public.blob.vercel-storage.com/Images/eye-bg.webp)",
        }}
      >
        <div className="text-center text-2xl font-bold uppercase text-[#ff7d25] sm:text-3xl md:text-4xl">
          CHAPTER 4
          <br />
          THE EYE OF THE UNIVERSE
        </div>
        <div className="flex flex-col items-center gap-6">
          <VideoModal label="Play Message" videoId={VIDEO_ID} />
          <button className="border border-[#ff7d25] px-10 py-3 text-2xl font-bold uppercase text-[#ff7d25]">
            Map
          </button>
        </div>
      </div>
    </PasswordGate>
  );
}
