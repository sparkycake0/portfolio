"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./singulars/ProjectCard";
import CollabSpace from "../assets/collaborationspace.png";
import RoyalShine from "../assets/royalshine.png";
import FlipsBalkan from "../assets/flipsbalkan.png";

export const projects = [
  {
    id: 1,
    title: "CollabSpace",
    description:
      "Interactive application for management of your projects and keeping track of it.",
    longDescription:
      "CollabSpace is a full-featured project management platform that allows teams to collaborate in real time. It offers task tracking, live updates via sockets, and optimized performance with React Query and Prisma for seamless data handling.",
    tech: ["NextJS", "Prisma", "Fastify", "SocketIO", "API", "React Query"],
    features: [
      "Real-time collaboration",
      "Live task updates",
      "User authentication system",
      "Optimized backend performance",
      "Project analytics dashboard",
    ],
    liveUrl: "https://collaborationspace.vercel.app",
    githubUrl: "https://github.com/sparkycake0/CollabSpace",
    image: CollabSpace,
  },
  {
    id: 2,
    title: "Royal Shine",
    description:
      "Website made for a car wash friend in order to make his organization easier.",
    longDescription:
      "Royal Shine is a professional website designed to streamline service bookings and improve client communication for a local car wash business. It focuses on simplicity, mobile responsiveness, and speed.",
    tech: ["NextJS", "Firebase"],
    features: [
      "Online booking system",
      "Admin dashboard",
      "Responsive design",
      "Customer contact integration",
    ],
    liveUrl: "royal-shine-iota.vercel.app",
    githubUrl: "https://github.com/sparkycake0/royal-shine",
    image: RoyalShine,
  },
  {
    id: 3,
    title: "FlipsBalkan",
    description:
      "Freelancing project made for discord reseller so he can showcase his work.",
    longDescription:
      "FlipsBalkan is a showcase platform built for a Discord reseller to display completed deals, reviews, and services. The website focuses on credibility and clean presentation.",
    tech: ["NextJS"],
    features: [
      "Project showcase gallery",
      "Testimonials section",
      "Fast loading speed",
      "Minimal dark UI",
    ],
    liveUrl: "flipsbalkan.vercel.app",
    githubUrl: "https://github.com/sparkycake0/FlipsBalkan",
    image: FlipsBalkan,
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div id="projectsPage" className="w-full min-h-screen bg-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-5xl font-bold text-fg mb-16 text-center"
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              style={{ perspective: "1000px" }}
              className="h-80"
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
