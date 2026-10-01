"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Plus } from "lucide-react";
import { process } from "@/lib/data";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });

  return (
    <section id="process" className="bg-moss-900 px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="sticky top-32 font-extrabold leading-[0.95] tracking-[-0.04em] text-moss-50" style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}>
            Good software is more than the interface.
          </h2>
        </div>
        <div ref={ref} className="relative pl-8">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-moss-700" />
          <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-[-1px] top-0 h-full w-[3px] origin-top bg-almond-cream-400" />
          {process.map((step, i) => {
            const isOpen = open === i;
            return (
              <button
                key={step.title}
                onClick={() => setOpen(i)}
                onMouseEnter={() => setOpen(i)}
                aria-expanded={isOpen}
                className="group relative block w-full border-b border-moss-700 py-8 text-left"
              >
                <span className="absolute -left-[39px] top-10 size-3 rounded-full border-2 border-almond-cream-400 bg-moss-900 transition-colors group-aria-expanded:bg-almond-cream-400" />
                <span className="flex items-center justify-between gap-4">
                  <span className="flex items-baseline gap-5">
                    <span className="font-mono text-sm text-moss-400">0{i + 1}</span>
                    <span className={`text-4xl font-bold tracking-tight transition-colors md:text-6xl ${isOpen ? "text-moss-50" : "text-moss-500"}`}>{step.title}</span>
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-almond-cream-400"><Plus size={28} /></motion.span>
                </span>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pl-11 pt-1 text-lg text-moss-200"
                    >
                      <span className="block pt-3">{step.text}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
