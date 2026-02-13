"use client";

import { motion } from "framer-motion";

export default function NewsTicker() {
  return (
    // 🔴 IMPORTANT: pointer-events-none added
    <div className="bg-red-800 overflow-hidden whitespace-nowrap relative z-10 pointer-events-none">
      <motion.div
        className="text-white py-2 px-4 text-sm font-medium inline-block"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        🔴 Breaking News: Sardar_Sukh_Chain_Singh Company Canada has issued 200 new visas!
        If you want to apply, hurry up — the last date is 31 Nov 2026. Apply Now!
      </motion.div>
    </div>
  );
}
