"use client";

import { Cpu, FolderCode, Mail } from "lucide-react";
import ThemeButton from "./singulars/ThemeButton";
import NavbarMenu from "./singulars/NavbarMenu";
import { motion } from "framer-motion";
export const navItems = [
  {
    name: "Skills",
    icon: Cpu,
    id: "skillsPage",
  },
  {
    name: "Projects",
    icon: FolderCode,
    id: "projectsPage",
  },
  {
    name: "Contact",
    icon: Mail,
    id: "contactPage",
  },
];

export function ScrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    return 0;
  }
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Navbar() {
  const containerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full z-50 p-2 flex justify-center">
      <motion.div
        className="bg-fg gap-4 w-11/12 flex justify-between text-bg items-center shadow-md shadow-shadow rounded-full m-4 origin-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants as any}
        style={{ transformOrigin: "center" }}
      >
        <ThemeButton />

        <motion.h1
          variants={itemVariants}
          className="select-none w-min font-semibold text-lg"
        >
          Ognjen Rajkovic
        </motion.h1>

        <motion.div
          className="lg:flex hidden items-center justify-center gap-4 mr-8"
          variants={itemVariants}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                className="bg-bg rounded-full p-1 px-4 hover:bg-hover transition-colors duration-150 text-fg"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => ScrollToId(item.id)}
              >
                <Icon size={32} />
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div className="lg:hidden" variants={itemVariants}>
          <NavbarMenu />
        </motion.div>
      </motion.div>
    </div>
  );
}
