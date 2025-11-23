"use client";

import { useAtom } from "jotai";
import { themeAtom } from "../../atoms/themeAtom";
import { Sun, Moon } from "lucide-react";

export default function ThemeButton() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full bg-bg outline-none border-0 -translate-x-0.5 px-4 p-1.5 hover:bg-hover transition-colors duration-300 w-min h-min"
    >
      {theme === "dark" ? (
        <Moon size={32} className="text-fg" />
      ) : (
        <Sun size={32} className="text-fg" />
      )}
    </button>
  );
}
