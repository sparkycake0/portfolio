"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalSkills, skillGroups } from "@/lib/data";

const all = Object.entries(skillGroups).flatMap(([cat, items]) => items.map((name) => ({ name, cat })));
const tabs = ["Everything", ...Object.keys(skillGroups)];
const catColor: Record<string, string> = {
  Languages: "#d29560", Frontend: "#8ba79b", Backend: "#b7ac7b", Data: "#93a48e", Environment: "#9093a2",
};

export default function Skills() {
  const [tab, setTab] = useState("Everything");
  const shown = tab === "Everything" ? all : all.filter((s) => s.cat === tab);

  return (
    <section id="skills" className="px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-extrabold leading-[0.9] tracking-[-0.045em] text-blue-slate-50" style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}>
          The toolbox
        </h2>
        <p className="mt-5 max-w-md text-lg text-blue-slate-400">The technologies I use to turn ideas into software. Pick a category.</p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[260px_1fr]">
          <div role="tablist" aria-label="Skill categories" className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
            {tabs.map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`relative rounded-xl px-4 py-3 text-left text-xl font-semibold transition-colors ${tab === t ? "text-blue-slate-950" : "text-blue-slate-400 hover:text-blue-slate-100"}`}
              >
                {tab === t && (
                  <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-xl bg-almond-cream-400" transition={{ type: "spring", stiffness: 400, damping: 34 }} />
                )}
                <span className="relative flex items-baseline justify-between gap-4">
                  {t}
                  <span className="font-mono text-xs opacity-70">{t === "Everything" ? all.length : skillGroups[t].length}</span>
                </span>
              </button>
            ))}
          </div>

          <motion.ul layout className="flex min-h-72 flex-wrap content-start gap-3">
            <AnimatePresence mode="popLayout">
              {shown.map((s, i) => (
                <motion.li
                  key={s.name}
                  layout
                  initial={{ opacity: 0, scale: 0.6, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28, delay: i * 0.015 }}
                  whileHover={{ y: -6, rotate: i % 2 ? 2 : -2 }}
                  className="flex items-center gap-3 rounded-full border border-blue-slate-800 bg-blue-slate-900 py-3 pl-4 pr-6 text-lg font-medium text-blue-slate-100"
                >
                  <span className="size-2.5 rounded-full" style={{ background: catColor[s.cat] }} />
                  {s.name}
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>

        <div className="mt-24 border-t border-blue-slate-800 pt-10">
          <h3 className="text-2xl font-semibold text-blue-slate-50">How I work</h3>
          <ul className="mt-6 flex flex-wrap gap-2">
            {personalSkills.map((p, i) => (
              <motion.li
                key={p}
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="rounded-md bg-muted-teal-800 px-4 py-2 text-muted-teal-100"
              >
                {p}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
