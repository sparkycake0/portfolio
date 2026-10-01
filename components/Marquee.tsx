"use client";
import { useRef } from "react";
import {
  motion, useAnimationFrame, useMotionTemplate, useMotionValue,
  useReducedMotion, useScroll, useSpring, useTransform, useVelocity,
} from "framer-motion";

const row1 = ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "Spring Boot", "PostgreSQL", "Tailwind CSS"];
const row2 = ["Framer Motion", "Prisma", "Drizzle", "Firebase", "Socket.IO", "Java", "Linux", "NixOS"];

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

function Row({ items, base, outline }: { items: string[]; base: number; outline?: boolean }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const smooth = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 5], { clamp: false });
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * base * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    x.set(wrap(-50, 0, x.get() + move));
  });

  const transform = useMotionTemplate`translateX(${x}%)`;
  const list = (k: string) => (
    <div className="flex shrink-0 items-center" key={k} aria-hidden={k === "b"}>
      {items.map((t) => (
        <span
          key={t}
          className={`px-6 text-6xl font-extrabold tracking-tight md:text-8xl ${outline ? "outline-text" : "text-blue-slate-100"}`}
        >
          {t}
          <span className="ml-12 text-almond-cream-400">/</span>
        </span>
      ))}
    </div>
  );
  return (
    <motion.div style={{ transform }} className="flex w-max">
      {list("a")}
      {list("b")}
    </motion.div>
  );
}

export default function Marquee() {
  return (
    <div className="flex flex-col gap-2 overflow-hidden border-y border-blue-slate-800 py-8" aria-label="Technologies I work with">
      <Row items={row1} base={-3} />
      <Row items={row2} base={3} outline />
    </div>
  );
}
