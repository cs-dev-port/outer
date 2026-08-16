import Hero from "@/components/Hero";
import TranslationToolButton from "@/components/TranslationToolButton";
import StoryChaptersButton from "@/components/StoryChaptersButton";
import TipsButton from "@/components/TipsButton";
import Spacer from "@/components/Spacer";

export default function Home() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-start overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/outer-motion-load-compressed.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative flex h-full w-full">
        <div className="flex h-full w-full origin-center scale-75 flex-col items-center justify-center sm:scale-90 md:w-1/2 md:scale-90 lg:scale-100">
          <Hero />
          <Spacer />
          <Spacer />
          <StoryChaptersButton />
          <Spacer />
          <TranslationToolButton />
          <Spacer />
          <TipsButton />
        </div>
        <div className="hidden h-full w-1/2 md:block" />
      </div>
    </div>
  );
}
