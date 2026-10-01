"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

function Line({ text, delay, colors }: { text: string; delay: number; colors: [string, string] }) {
  return (
    <span className="block overflow-hidden pb-[0.06em] pt-[0.14em] leading-[0.82]" aria-hidden>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "115%", rotate: 6 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ delay: delay + i * 0.05, duration: 1, ease }}
          whileHover={{ color: colors[i % 2] }}
          className="inline-block"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

const words = ["backends that hold up", "interfaces that feel alive", "products from end to end"];

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex h-[1.3em] overflow-hidden align-bottom text-almond-cream-400">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease }}
          className="whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const code = `const ognjen = {
  role: "Full-stack developer",
  based: "Niš, Serbia",
  stack: ["Next.js", "NestJS", "Spring Boot", "PostgreSQL"],
  years: 4,
  openTo: ["junior roles", "internships", "freelance"],
  shipping: true,
};`;

function highlight(src: string) {
  const re = /("[^"]*"?)|\b(const|true|false)\b|(\b\d+\b)|([A-Za-z_]\w*)(?=:)/g;
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m.index > last) out.push(src.slice(last, m.index));
    const cls = m[1] ? "text-moss-300" : m[2] ? "text-almond-cream-400" : m[3] ? "text-dry-sage-300" : "text-muted-teal-300";
    out.push(<span key={m.index} className={cls}>{m[0]}</span>);
    last = m.index + m[0].length;
  }
  out.push(src.slice(last));
  return out;
}

function CodePanel() {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setN(code.length);
    const start = setTimeout(() => {
      const t = setInterval(() => setN((v) => (v >= code.length ? (clearInterval(t), v) : v + 1)), 24);
    }, 1500);
    return () => clearTimeout(start);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.9, ease }}
      className="w-full max-w-xl rounded-xl border border-blue-slate-800 bg-blue-slate-900"
    >
      <div className="flex items-center gap-2 border-b border-blue-slate-800 px-4 py-3">
        <span className="size-3 rounded-full bg-almond-cream-500" />
        <span className="size-3 rounded-full bg-dry-sage-500" />
        <span className="size-3 rounded-full bg-muted-teal-500" />
        <span className="ml-3 font-mono text-xs text-blue-slate-500">ognjen.ts</span>
      </div>
      <pre className="min-h-[15.5rem] overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-blue-slate-300 sm:text-sm">
        <code>
          {highlight(code.slice(0, n))}
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-almond-cream-400" />
        </code>
      </pre>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="dot-grid relative flex min-h-screen flex-col justify-end px-6 pb-14 pt-32 md:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-blue-slate-800 bg-blue-slate-950 px-4 py-2 text-sm text-blue-slate-300"
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-muted-teal-400 opacity-70" />
          <span className="relative inline-flex size-2.5 rounded-full bg-muted-teal-400" />
        </span>
        Open to junior roles and internships
      </motion.div>

      <h1
        aria-label={profile.name}
        className="font-extrabold tracking-[-0.045em] text-blue-slate-50"
        style={{ fontSize: "clamp(4.2rem, 19.5vw, 19rem)" }}
      >
        <Line text="Ognjen" delay={0.2} colors={["#d29560", "#8ba79b"]} />
        <Line text="Rajković" delay={0.5} colors={["#8ba79b", "#d29560"]} />
      </h1>

      <div className="mt-12 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease }}
            className="text-2xl font-medium leading-snug text-blue-slate-200 sm:text-3xl"
          >
            I build <RotatingWord />
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-5 max-w-md text-blue-slate-400"
          >
            A developer from Niš who connects thoughtful interfaces with reliable systems, and keeps learning how to do it better.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.8, ease }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-almond-cream-400 px-6 py-3.5 font-semibold text-blue-slate-950 transition-colors hover:bg-almond-cream-300">
              See my work
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-blue-slate-700 px-6 py-3.5 font-semibold text-blue-slate-100 transition-colors hover:border-muted-teal-400 hover:text-muted-teal-300">
              Get in touch
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>
        <CodePanel />
      </div>
    </section>
  );
}
