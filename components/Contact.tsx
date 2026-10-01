"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Instagram, Phone } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  const links = [
    { label: "GitHub", value: "@sparkycake0", href: profile.github, icon: Github },
    { label: "Instagram", value: "@raajkovicc__", href: profile.instagram, icon: Instagram },
    { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  ];
  return (
    <section id="contact">
      <div className="bg-almond-cream-400 px-6 py-24 text-blue-slate-950 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-lg font-medium">Have a project, an opportunity or a good idea?</p>
          <h2 className="mt-4 font-extrabold leading-[0.88] tracking-[-0.05em]" style={{ fontSize: "clamp(3.4rem, 12vw, 11rem)" }}>
            Let&apos;s build<br />something real.
          </h2>

          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-slate-950 px-8 py-5 text-xl font-semibold text-almond-cream-50 sm:text-2xl"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-moss-700 transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-y-100" />
              <span className="relative">{profile.email}</span>
              <ArrowUpRight className="relative transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
            <button
              onClick={copy}
              aria-label="Copy email address"
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-slate-950 px-5 py-5 font-semibold transition-colors hover:bg-blue-slate-950 hover:text-almond-cream-50"
            >
              <motion.span key={String(copied)} initial={{ scale: 0.4, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}>
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </motion.span>
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <ul className="mt-16 grid gap-4 sm:grid-cols-3">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center justify-between rounded-2xl border-2 border-blue-slate-950/20 p-5 transition-colors hover:border-blue-slate-950 hover:bg-blue-slate-950 hover:text-almond-cream-50">
                  <span className="flex items-center gap-4">
                    <l.icon size={24} />
                    <span>
                      <span className="block font-semibold">{l.label}</span>
                      <span className="block text-sm opacity-70">{l.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.agencyUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 flex flex-col justify-between gap-2 rounded-2xl bg-blue-slate-950/10 p-5 transition-colors hover:bg-blue-slate-950 hover:text-almond-cream-50 sm:flex-row sm:items-center"
          >
            <span>
              <span className="block font-semibold">Space Code Agency</span>
              <span className="block text-sm opacity-70">I co-founded a web agency that builds websites and apps for businesses.</span>
            </span>
            <span className="inline-flex items-center gap-2 font-semibold">
              Visit the agency <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
