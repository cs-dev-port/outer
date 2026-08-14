"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <Image
        src="/outer-hero.png"
        alt="Hero"
        width={350}
        height={232}
        priority
        className="h-[232px] w-[350px]"
      />
      <div className="w-full border-t-2 border-dotted border-white/40" />
    </motion.div>
  );
}
