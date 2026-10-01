import type { StaticImageData } from "next/image";
import flipsBalkan from "@/assets/flipsbalkan.png";
import spaceCode from "@/assets/spacecode.png";
import royalShine from "@/assets/royalshine.png";

export const profile = {
  name: "Ognjen Rajković",
  location: "Niš, Serbia",
  email: "ogirajko248@gmail.com",
  phone: "+381 61 192 6474",
  phoneHref: "tel:+381611926474",
  github: "https://github.com/sparkycake0",
  instagram: "https://instagram.com/raajkovicc__",
  agencyUrl: "https://spacecodeagency.vercel.app",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export type Project = {
  name: string;
  type: string;
  description: string;
  role: string;
  features: string[];
  stack: string[];
  image: StaticImageData;
  liveUrl?: string;
  githubUrl: string;
  tone: { bg: string; block: string; accent: string };
};

export const projects: Project[] = [
  {
    name: "FlipsBalkan",
    type: "Freelance showcase platform",
    description:
      "A focused showcase platform for a Discord reseller to present completed deals, reviews and services with credibility.",
    role: "Design direction, component system and production implementation.",
    features: [
      "Project showcase gallery",
      "Testimonials section",
      "Fast loading speed",
      "Minimal dark UI",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: flipsBalkan,
    liveUrl: "https://flipsbalkan.vercel.app",
    githubUrl: "https://github.com/sparkycake0/FlipsBalkan",
    tone: { bg: "#2c3a34", block: "#587468", accent: "#a8bdb4" },
  },
  {
    name: "SpaceCode",
    type: "Developer workspace",
    description:
      "A real-time workspace concept for keeping projects, context and ideas connected in one place.",
    role: "Product architecture, responsive interface, state management and the integration layer.",
    features: [
      "Real-time workspace",
      "Connected projects and ideas",
      "Typed state management",
      "Responsive interface",
    ],
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: spaceCode,
    liveUrl: "https://spacecodeagency.vercel.app",
    githubUrl: "https://github.com/sparkycake0/SpaceCode",
    tone: { bg: "#30392d", block: "#60715b", accent: "#aebbaa" },
  },
];

export const skillGroups: Record<string, string[]> = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "Java",
    "Rust",
    "Dart",
    "HTML",
    "CSS",
  ],
  Frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "React Query",
    "Jotai",
    "Three.js",
    "React Native",
    "Expo",
    "NativeWind",
  ],
  Backend: [
    "Node.js",
    "NestJS",
    "Fastify",
    "Spring Boot",
    "Socket.IO",
    "REST APIs",
  ],
  Data: ["PostgreSQL", "Prisma", "Drizzle ORM", "Firebase"],
  Environment: ["Git", "GitHub", "Linux", "NixOS"],
};

export const personalSkills = [
  "Teamwork",
  "Consistency",
  "Strong will to learn",
  "Discipline",
  "Communication",
  "Problem solving",
  "Adaptability",
  "Self-motivation",
  "Reliability",
];

export const process = [
  {
    title: "Understand",
    text: "Find the real problem before reaching for a solution.",
  },
  {
    title: "Design",
    text: "Make the experience clear, useful and easy to return to.",
  },
  {
    title: "Build",
    text: "Create systems that are typed, reusable and maintainable.",
  },
  {
    title: "Connect",
    text: "Let the frontend, backend and database work as one.",
  },
  {
    title: "Ship",
    text: "Polish the details, test the edges and put it in people's hands.",
  },
];
