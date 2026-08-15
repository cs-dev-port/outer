"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TipsButton() {
  const router = useRouter();

  return (
    <motion.div
      className="flex cursor-pointer items-center justify-center text-[#ff7d25] text-4xl uppercase font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut", delay: 1.5 }}
      onClick={() => router.push("/tips")}
    >
      Tool Tips
    </motion.div>
  );
}
