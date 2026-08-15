import { notFound } from "next/navigation";
import VideoModal from "@/components/VideoModal";
import PlaySoundButton from "@/components/PlaySoundButton";
import { nomaiWritings } from "@/lib/nomai-writings";

export default async function NomaiWritingPage({
  params,
}: PageProps<"/translation-tool/[tag]">) {
  const { tag } = await params;
  const writing = nomaiWritings[tag];

  if (!writing) {
    notFound();
  }

  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-black px-4"
      style={{
        background: "radial-gradient(circle, #2e9589, black)",
      }}
    >
      <div className="text-center text-2xl font-bold uppercase text-white sm:text-3xl md:text-4xl">
        {writing.title}
      </div>
      <p className="max-w-2xl text-center text-lg text-white sm:text-xl">
        {writing.content}
      </p>
      {writing.action === "sound" && writing.soundSrc && (
        <PlaySoundButton label="Play Recording" soundSrc={writing.soundSrc} />
      )}
      {writing.action === "video" && writing.videoId && (
        <VideoModal label="Play Video" videoId={writing.videoId} />
      )}
    </div>
  );
}
