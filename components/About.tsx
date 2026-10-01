"use client";
import { useEffect, useRef } from "react";
import {
  animate, motion, MotionValue, useInView, useReducedMotion, useScroll, useTransform,
} from "framer-motion";
import { projects, skillGroups } from "@/lib/data";

const text =
  "I've been learning and building software for around four years. I started with the web, then kept going deeper into APIs, databases, architecture and everything that makes an application feel complete. Today I'm focused on becoming a stronger engineer, and on finding a team where I can contribute, learn fast and ship meaningful work.";

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">{word}</motion.span>;
}

function ScrollText() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = text.split(" ");
  if (reduce) return <p className="text-3xl font-semibold leading-tight md:text-5xl">{text}</p>;
  return (
    <p ref={ref} className="text-3xl font-semibold leading-[1.15] tracking-tight text-blue-slate-50 md:text-5xl">
      {words.map((w, i) => (
        <Word key={i} word={w} range={[i / words.length, (i + 1) / words.length]} progress={scrollYProgress} />
      ))}
    </p>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => (el.textContent = Math.round(v) + suffix) });
    return () => c.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const techCount = Object.values(skillGroups).flat().length;
const stats = [
  { n: 4, s: "+", label: "years building software" },
  { n: techCount, s: "", label: "technologies in my toolbox" },
  { n: projects.length, s: "", label: "projects featured here" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-12 md:py-44">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-14 max-w-xl text-lg font-medium text-muted-teal-300">
          Curious by default. Intentional by practice.
        </h2>
        <ScrollText />
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-blue-slate-800 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-blue-slate-950 p-8 transition-colors hover:bg-blue-slate-900">
              <div className="text-7xl font-extrabold tracking-tighter text-almond-cream-400">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <p className="mt-2 text-blue-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
