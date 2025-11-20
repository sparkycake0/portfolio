"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../Navbar";

export default function NavbarMenu() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <button
        onClick={() => setMenu(true)}
        className="lg:hidden flex hover:*:bg-hover transition-colors duration-500 items-center mr-8 *:w-6 *:h-1 *:bg-bg flex-col gap-1"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute z-50 top-0 left-0 backdrop-blur-lg backdrop-brightness-75 w-screen h-screen text-fg"
          >
            {/* CLOSE BUTTON */}
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ delay: 0.1 }}
              onClick={() => setMenu(false)}
              className="right-0 top-0 absolute bg-bg rounded-bl-full p-2"
            >
              <X size={32} className="translate-x-2 -translate-y-1" />
            </motion.button>

            {/* MENU ITEMS */}
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-4 -translate-y-1/2"
            >
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.id}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex w-full bg-fg text-bg p-2 rounded-full justify-between gap-4 hover:bg-hover hover:text-fg transition-colors duration-500"
                  >
                    <h1>{item.name}</h1>
                    <Icon />
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
