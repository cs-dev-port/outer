export default function TipsPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-black p-8">
      <div className="flex max-w-2xl flex-col items-center gap-8 border-2 border-[#ff7d25] p-10">
        <p className="text-center text-lg font-bold text-[#ff7d25] sm:text-xl md:text-2xl">
          MARK??!!? HAPPY BIRTHDAY! I hope you enjoy this celebration of life.{" "}
          <br /> I love you, buddy. <br /> Hopefully we make it out of this in
          one piece :D.
        </p>
        <div className="flex flex-col items-center gap-2 text-center text-xs text-[#ff7d25] sm:text-sm">
          <p>
            Tip: this app is touch screen, swipe to go back and forth between
            pages.
          </p>
          <p>
            Tip: if you want to use another device or lose the page, you can
            access this app from https://outer-lovat.vercel.app/
          </p>
        </div>
      </div>
    </div>
  );
}
