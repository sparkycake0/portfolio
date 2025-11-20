"use client";
import { Github, Instagram, MousePointer, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/atoms/themeAtom";
import Sun from "@/components/three/Sun";
import Moon from "@/components/three/Moon";

export default function Home() {
  const [click, setClick] = useState(false);
  const [folded, setFolded] = useState(true);
  const theme = useAtomValue(themeAtom);
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
    <main>
      <div className="flex gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex justify-end items-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            {theme === "light" ? (
              <motion.button
                key="sun"
                initial="hidden"
                animate="visible"
                variants={variants as any}
                exit="exit"
                className="-translate-y-5"
                onClick={() => setClick(!click)}
              >
                <Sun size={200} raysCount={20} rayLength={16} rayWidth={25} />
              </motion.button>
            ) : (
              <motion.button
                key="moon"
                initial="hidden"
                animate="visible"
                variants={variants as any}
                exit="exit"
                className="translate-x-24"
                onClick={() => setClick(!click)}
              >
                <Moon size={160} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
        <div
          className={`flex-1 absolute top-64 flex flex-col lg:flex-row bg-fg text-bg rounded-2xl ${click ? "translate-x-0" : "-translate-x-[300%]"} transition-all duration-300 `}
        >
          <div className="w-full lg:w-4/12 lg:bg-border m-4 lg:p-2 lg:rounded-3xl">
            <h1 className="text-center text-2xl lg:text-end lg:text-3xl lg:ml-4">
              Software Developer
            </h1>
            <p className="p-2 lg:text-end">
              Passionate software developer with high set of skills and
              knowledge about creating stuning and fast-running web and mobile
              applications.
            </p>
          </div>
          <div className="flex-1 hidden lg:flex items-center justify-center flex-col gap-2 lg:gap-4">
            <button className="bg-bg text-fg p-1 lg:p-2 px-4 rounded-full">
              Download CV
            </button>
            <button className="underline p-1 lg:p-2 px-4 rounded-full">
              See previous projects...
            </button>
            <div className="flex gap-3">
              <Instagram
                size={48}
                className="bg-bg text-fg p-1.5 rounded-full"
              />
              <Github size={48} className="bg-bg text-fg p-1.5 rounded-full" />
              <Phone size={48} className="bg-bg text-fg p-1.5 rounded-full" />
            </div>
          </div>
          <button
            onClick={() => setFolded(!folded)}
            className={`lg:hidden bg-bg text-fg flex h-10 mt-10 w-full self-center brightness-75 justify-center items-center transition-all duration-75 ${folded ? "rounded-2xl" : "rounded-t-2xl"} `}
          >
            <MousePointer size={24} />
          </button>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: folded ? 0 : "auto" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden flex flex-col items-center gap-3 rounded-b-2xl bg-bg text-fg brightness-75"
          >
            <button className="bg-fg mt-2 text-bg p-1 lg:p-2 px-4 rounded-full">
              Download CV
            </button>

            <button className="underline p-1 lg:p-2 px-4 rounded-full">
              See previous projects...
            </button>

            <div className="flex gap-3 mb-2">
              <Instagram
                size={48}
                className="bg-fg text-bg p-1.5 rounded-full"
              />
              <Github size={48} className="bg-fg text-bg p-1.5 rounded-full" />
              <Phone size={48} className="bg-fg text-bg p-2 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
