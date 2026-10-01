"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [big, setBig] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      // Instant position — no spring, no interpolation
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target as HTMLElement;

      setBig(!!target.closest("a, button, [data-cursor]"));
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[100]
        size-4
        rounded-full
        bg-almond-cream-400
        mix-blend-difference
        will-change-transform
      "
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: big ? 3.2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.2,
      }}
    />
  );
}
