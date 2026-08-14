import Hero from "@/components/Hero";
import TranslationToolButton from "@/components/TranslationToolButton";
import SignalScopeButton from "@/components/SignalScopeButton";
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
        <div className="flex h-full w-1/2 flex-col items-center justify-center">
          <Hero />
          <Spacer />
          <Spacer />
          <TranslationToolButton />
          <Spacer />
          <SignalScopeButton />
          <Spacer />
          <MapButton />
        </div>
        <div className="h-full w-1/2" />
      </div>
    </div>
  );
}
