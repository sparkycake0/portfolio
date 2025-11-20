"use client";

import { motion, AnimatePresence } from "framer-motion";
import Sun from "./Sun";
import Moon from "./Moon";
import { themeAtom } from "@/atoms/themeAtom";
import { useAtomValue } from "jotai";

export default function Scene() {
  const theme = useAtomValue(themeAtom);

  // Animation variants for fade + scale
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full flex justify-end items-center"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Sun size={200} raysCount={20} rayLength={16} rayWidth={25} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Moon size={160} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
