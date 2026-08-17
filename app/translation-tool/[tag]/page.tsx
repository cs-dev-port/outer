import { notFound } from "next/navigation";
import VideoModal from "@/components/VideoModal";
import PlaySoundButton from "@/components/PlaySoundButton";
import ScrambleText from "@/components/ScrambleText";
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
      <ScrambleText
        text={writing.content}
        className="max-w-2xl text-center text-lg text-white sm:text-xl"
      />
      {writing.action === "sound" && writing.soundSrc && (
        <PlaySoundButton label="Play Recording" soundSrc={writing.soundSrc} />
      )}
      {writing.action === "video" && writing.videoId && (
        <VideoModal label="Play Video" videoId={writing.videoId} />
      )}
      <a
        href="/translation-tool"
        className="border border-white px-10 py-3 text-lg font-bold uppercase text-white"
      >
        Scan Again
      </a>
    </div>
  );
}
