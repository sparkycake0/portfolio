"use client";

import { Cpu, FolderCode, Mail } from "lucide-react";
import ThemeButton from "./singulars/ThemeButton";
import NavbarMenu from "./singulars/NavbarMenu";
import { motion } from "framer-motion";

export const navItems = [
  {
    name: "Skills",
    icon: Cpu,
    id: "skills",
  },
  {
    name: "Projects",
    icon: FolderCode,
    id: "projects",
  },
  {
    name: "Contact",
    icon: Mail,
    id: "contact",
  },
];

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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-fg flex z-40 justify-between text-bg items-center shadow-md shadow-shadow rounded-full m-4 origin-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants as any}
      style={{ transformOrigin: "center" }}
    >
      <motion.div variants={itemVariants}>
        <ThemeButton />
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="select-none font-semibold text-lg"
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
  );
}
