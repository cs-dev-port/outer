"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TranslationToolButton() {
  const router = useRouter();

  return (
    <motion.div
      className="flex cursor-pointer items-center justify-center text-[#ff7d25] text-xl uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-2xl md:text-3xl lg:text-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
      onClick={() => router.push("/translation-tool")}
    >
      Translation Tool
    </motion.div>
  );
}
