import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Ognjen Rajković — Full-stack developer",
  description:
    "Portfolio of Ognjen Rajković, a full-stack developer from Niš, Serbia. Typed, reliable systems with interfaces that feel alive.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-blue-slate-950 text-blue-slate-100 antialiased">
        <ScrollProgress />
        <Cursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
