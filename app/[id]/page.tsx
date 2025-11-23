"use client";

import { projects } from "@/components/ProjectsPage";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const ProjectPage = () => {
  const params = useParams();
  const id = params.id?.toString();
  const project = projects.find((p) => p.id.toString() === id);
  return (
    <div className="w-full min-h-screen bg-bg py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-fg hover:text-border transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold text-fg mb-4">{project?.title}</h1>
          <p className="text-xl text-fg opacity-80">{project?.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex gap-4 mb-12"
        >
          {project?.liveUrl && (
            <div className="relative group">
              <div className="absolute inset-0 bg-border rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
              <a
                href={project?.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center gap-2 px-6 py-3 bg-fg text-bg font-semibold rounded-xl border-2 border-border group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          )}

          {project?.githubUrl && (
            <div className="relative group">
              <div className="absolute inset-0 bg-border rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
              <a
                href={project?.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center gap-2 px-6 py-3 bg-fg text-bg font-semibold rounded-xl border-2 border-border group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              >
                <Github size={20} />
                View Code
              </a>
            </div>
          )}
        </motion.div>

        {project?.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-border rounded-2xl translate-x-2 translate-y-2 -z-10"></div>
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-border">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-border rounded-2xl translate-x-2 translate-y-2 -z-10"></div>
          <div className="relative z-10 bg-fg text-bg p-8 rounded-2xl border-2 border-border">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <p className="text-lg leading-relaxed opacity-90">
              {project?.longDescription}
            </p>
          </div>
        </motion.div>

        {project?.features && project?.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-border rounded-2xl translate-x-2 translate-y-2 -z-10"></div>
            <div className="relative z-10 bg-fg text-bg p-8 rounded-2xl border-2 border-border">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-bg shrink-0"></span>
                    <span className="text-lg opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-fg mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project?.tech.map((tech, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-border rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
                <div className="relative z-10 px-6 py-3 bg-fg text-bg font-semibold rounded-xl border-2 border-border group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 transform group-hover:scale-105">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
