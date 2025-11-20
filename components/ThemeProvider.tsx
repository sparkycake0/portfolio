"use client";

import { ReactNode, useEffect } from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../atoms/themeAtom";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
}
