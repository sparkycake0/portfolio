"use client";

import { motion } from "framer-motion";

export default function Moon({ size = 84 }: { size?: number }) {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 0.8,
      }}
      whileTap={{
        rotate: "80deg",
      }}
      className="rounded-full -rotate-40 w-min -translate-x-24"
      style={{ width: size, height: size }}
      aria-label="Crescent moon icon"
      role="img"
    >
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(to bottom, white 0%, #c9a6ff 100%)",
        }}
      ></div>

      <div
        className="absolute top-0 rounded-full bg-bg"
        style={{
          width: size,
          height: size,
          left: size * 0.4,
        }}
      ></div>
    </motion.div>
  );
}
