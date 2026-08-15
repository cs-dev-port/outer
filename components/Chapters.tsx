"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import BackgroundVideo from "@/components/BackgroundVideo";
import type { ChapterSlug } from "@/lib/passwords";

const chapters: { label: string; slug: ChapterSlug; delay: number }[] = [
  { label: "Chapter 1", slug: "chapter-1", delay: 0 },
  { label: "Chapter 2", slug: "chapter-2", delay: 0.5 },
  { label: "Chapter 3", slug: "chapter-3", delay: 1 },
  { label: "Chapter 4", slug: "chapter-4", delay: 1.5 },
];

export default function Chapters() {
  const router = useRouter();

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <BackgroundVideo src="/outer-motion-load-compressed.mp4" />
      <div className="relative flex flex-col items-center gap-6">
        {chapters.map((chapter) => (
          <motion.button
            key={chapter.slug}
            onClick={() => router.push(`/story-chapters/${chapter.slug}`)}
            className="border border-[#ff7d25] px-10 py-3 text-2xl font-bold uppercase text-[#ff7d25]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut", delay: chapter.delay }}
          >
            {chapter.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
