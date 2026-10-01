"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Belgrade" });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 bg-blue-slate-950 px-6 py-8 text-sm text-blue-slate-400 md:px-12">
      <span>© {new Date().getFullYear()} Ognjen Rajković</span>
      <span className="font-mono">Niš, Serbia · {time || "--:--:--"}</span>
      <a href="#top" className="inline-flex items-center gap-2 text-blue-slate-200 transition-colors hover:text-almond-cream-400">
        Back to top <ArrowUp size={16} />
      </a>
    </footer>
  );
}
