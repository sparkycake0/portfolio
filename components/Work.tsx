"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Github } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function Tilt({ project }: { project: Project }) {
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  return (
    <div
      className="relative w-full [perspective:1200px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 12);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl sm:translate-x-5 sm:translate-y-5"
          style={{ background: project.tone.block }}
        />
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="relative w-full rounded-xl border border-white/10"
        />
      </motion.div>
    </div>
  );
}

function Slide({ project, index }: { project: Project; index: number }) {
  const { tone } = project;
  return (
    <div className="grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div>
        <p className="font-mono text-sm" style={{ color: tone.accent }}>
          {String(index + 1).padStart(2, "0")} · {project.type}
        </p>
        <h3
          className="mt-3 font-extrabold leading-[0.9] tracking-[-0.04em] text-white"
          style={{ fontSize: "clamp(3rem, 7.5vw, 7rem)" }}
        >
          {project.name}
        </h3>
        <p className="mt-5 max-w-lg text-lg text-white/80">
          {project.description}
        </p>
        <p className="mt-3 max-w-lg text-sm text-white/60">
          <span style={{ color: tone.accent }}>My part: </span>
          {project.role}
        </p>
        <ul className="mt-5 grid max-w-lg grid-cols-1 gap-x-6 gap-y-1.5 text-sm text-white/80 sm:grid-cols-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Check size={14} style={{ color: tone.accent }} /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border px-3 py-1 font-mono text-xs"
              style={{ borderColor: tone.accent + "66", color: tone.accent }}
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-7 flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-blue-slate-950"
              style={{ background: tone.accent }}
            >
              Live site{" "}
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Github size={17} /> Source
          </a>
        </div>
      </div>
      <Tilt project={project} />
    </div>
  );
}

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const slides = projects.length + 1;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `${-(slides - 1) * 100}vw`],
  );
  const stops = Array.from({ length: slides }, (_, i) => i / (slides - 1));
  const bg = useTransform(scrollYProgress, stops, [
    "#101113",
    ...projects.map((p) => p.tone.bg),
  ]);
  const [current, setCurrent] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setCurrent(Math.round(v * (slides - 1))),
  );

  return (
    <section id="work">
      {/* desktop: sticky horizontal showcase */}
      <div
        ref={ref}
        className="relative hidden md:block"
        style={{ height: `${slides * 100}vh` }}
      >
        <motion.div
          style={{ background: bg }}
          className="sticky top-0 h-screen overflow-hidden"
        >
          <motion.div style={{ x }} className="flex h-full">
            <div className="flex h-full w-screen shrink-0 flex-col justify-center px-12">
              <h2
                className="font-extrabold leading-[0.85] tracking-[-0.05em] text-blue-slate-50"
                style={{ fontSize: "clamp(4rem, 14vw, 14rem)" }}
              >
                Selected
                <br />
                <span className="text-almond-cream-400">work</span>
              </h2>
              <p className="mt-8 flex items-center gap-3 text-lg text-blue-slate-400">
                Things I&apos;ve designed, built and learned from. Keep
                scrolling
                <motion.span
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  className="-rotate-90"
                >
                  <ArrowDown size={20} />
                </motion.span>
              </p>
            </div>
            {projects.map((p, i) => (
              <div
                key={p.name}
                className="flex h-full w-screen shrink-0 items-center justify-center px-12 pt-12"
              >
                <Slide project={p} index={i} />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-x-12 bottom-8 flex items-center gap-5 font-mono text-xs text-white/70">
            <span>
              {String(current).padStart(2, "0")} /{" "}
              {String(slides - 1).padStart(2, "0")}
            </span>
            <div className="h-px flex-1 bg-white/15">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full origin-left bg-almond-cream-400"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* mobile: stacked */}
      <div className="md:hidden">
        <h2 className="px-6 pb-10 pt-24 text-6xl font-extrabold tracking-[-0.05em] text-blue-slate-50">
          Selected <span className="text-almond-cream-400">work</span>
        </h2>
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="px-6 py-16"
            style={{ background: p.tone.bg }}
          >
            <Slide project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
