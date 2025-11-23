"use client";
import { Github, Instagram, MousePointer, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/atoms/themeAtom";
import Sun from "@/components/three/Sun";
import Moon from "@/components/three/Moon";
import ProjectsPage from "@/components/ProjectsPage";
import SkillsPage from "@/components/SkillsPage";
import { ScrollToId } from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";

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
    <main className="w-full">
      <div
        id="homePage"
        className="min-h-screen flex flex-col justify-center items-center relative"
      >
        <div className="flex gap-4 w-full max-w-7xl px-4">
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
                  className="-translate-y-5 "
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
        </div>

        <motion.div
          initial={{ x: "-300%", y: 20, opacity: 0 }}
          animate={{
            x: click ? 0 : "-300%",
            y: click ? 0 : 20,
            opacity: click ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ perspective: "1200px" }}
          className="w-full max-w-4xl mx-auto mt-8 px-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-border rounded-2xl translate-x-2 translate-y-2 -z-10"></div>

            <div
              className="relative flex flex-col lg:flex-row bg-fg text-bg rounded-2xl overflow-hidden border-2 border-border hover:translate-x-1 hover:translate-y-1 transition-all duration-300 transform hover:scale-[1.01]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="lg:w-full bg-border m-4 p-2 rounded-3xl">
                <h1 className="text-center text-2xl lg:text-end lg:text-3xl lg:ml-4">
                  Software Developer
                </h1>
                <p className="p-2 lg:text-end">
                  Passionate software developer with high set of skills and
                  knowledge about creating stuning and fast-running web and
                  mobile applications.
                </p>
              </div>
              <div className="flex-1 hidden lg:w-max lg:flex items-center justify-end flex-col gap-2 lg:gap-4 py-8">
                <button className="bg-bg text-fg p-1 lg:p-2 px-4 rounded-full hover:scale-105 transition-transform duration-200 hover:shadow-[3px_3px_0px_0px] hover:shadow-shadow">
                  Download CV
                </button>
                <button
                  onClick={() => ScrollToId("projectsPage")}
                  className="underline p-1 lg:p-2 px-4 rounded-full hover:scale-105 transition-transform duration-200"
                >
                  See previous projects...
                </button>
                <div className="flex gap-3">
                  <Instagram
                    size={48}
                    className="bg-bg text-fg p-1.5 rounded-full hover:scale-110 hover:shadow-[4px_4px_0px_0px] hover:shadow-shadow transition-all duration-200 cursor-pointer"
                  />
                  <Github
                    size={48}
                    className="bg-bg text-fg p-1.5 rounded-full hover:scale-110 hover:shadow-[4px_4px_0px_0px] hover:shadow-shadow transition-all duration-200 cursor-pointer"
                  />
                  <Phone
                    size={48}
                    className="bg-bg text-fg p-1.5 rounded-full hover:scale-110 hover:shadow-[4px_4px_0px_0px] hover:shadow-shadow transition-all duration-200 cursor-pointer"
                  />
                </div>
              </div>
              <button
                onClick={() => setFolded(!folded)}
                className={`lg:hidden bg-bg text-fg flex h-10 w-full flex-col self-center justify-center items-center transition-all duration-200 hover:bg-hover ${folded ? "rounded-b-2xl" : ""} `}
              >
                <MousePointer size={24} />
              </button>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: folded ? 0 : "auto" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden flex flex-col items-center gap-3 bg-bg text-fg rounded-b-2xl"
              >
                <button className="bg-fg mt-2 text-bg p-1 lg:p-2 px-4 rounded-full">
                  Download CV
                </button>

                <button className="underline p-1 lg:p-2 px-4 rounded-full">
                  See previous projects...
                </button>

                <div className="flex gap-3 mb-4">
                  <Instagram
                    size={48}
                    className="bg-fg text-bg p-1.5 rounded-full"
                  />
                  <Github
                    size={48}
                    className="bg-fg text-bg p-1.5 rounded-full"
                  />
                  <Phone size={48} className="bg-fg text-bg p-2 rounded-full" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>{" "}
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </main>
  );
}
