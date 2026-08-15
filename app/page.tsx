import Hero from "@/components/Hero";
import TranslationToolButton from "@/components/TranslationToolButton";
import StoryChaptersButton from "@/components/StoryChaptersButton";
import MapButton from "@/components/MapButton";
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
        <div className="flex h-full w-1/2 origin-center scale-50 flex-col items-center justify-center sm:scale-75 md:scale-90 lg:scale-100">
          <Hero />
          <Spacer />
          <Spacer />
          <StoryChaptersButton />
          <Spacer />
          <TranslationToolButton />
          <Spacer />
          <MapButton />
        </div>
        <div className="h-full w-1/2" />
      </div>
    </div>
  );
}
