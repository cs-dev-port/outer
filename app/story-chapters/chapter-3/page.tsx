import PasswordGate from "@/components/PasswordGate";
import VideoModal from "@/components/VideoModal";
import { chapterPasswords } from "@/lib/passwords";

const VIDEO_ID = "dQw4w9WgXcQ";

export default function Chapter3Page() {
  return (
    <PasswordGate
      password={chapterPasswords["chapter-3"]}
      placeholder="code = sai_ _ _"
      hint="location name"
    >
      <div
        className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black bg-cover bg-center px-4"
        style={{
          backgroundImage:
            "url(https://umnqakvebzkowroi.public.blob.vercel-storage.com/Images/deep.jpg)",
        }}
      >
        <div className="flex flex-col items-center gap-8 bg-black px-10 py-8">
          <div className="text-center text-2xl font-bold uppercase text-[#ff7d25] sm:text-3xl md:text-4xl">
            Chapter 3 - GIANTS DEEP & DARK BRAMBLE
          </div>
          <VideoModal label="Play Message" videoId={VIDEO_ID} />
        </div>
      </div>
    </PasswordGate>
  );
}
