"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

const skills = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Fastify", category: "Backend" },
  { name: "API", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Three.js", category: "3D" },
  { name: "Jotai", category: "State" },
  { name: "Tailwind", category: "Styling" },
  { name: "React Query", category: "Data" },
  { name: "Socket.io", category: "Realtime" },
];

const categories = [
  "All",
  ...Array.from(new Set(skills.map((s) => s.category))),
];

const SkillsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="skillsPage" className="w-full min-h-max bg-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-5xl font-bold text-fg mb-8 text-center"
        >
          Skills
        </motion.h2>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12 flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <div className="absolute inset-0 bg-border rounded-xl translate-x-1 translate-y-1 -z-10"></div>
            <div className="relative z-10 flex items-center bg-fg border-2 border-border rounded-xl overflow-hidden">
              <Search className="ml-4 text-bg" size={20} />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 bg-transparent text-bg placeholder-bg placeholder-opacity-60 outline-none"
              />
            </div>
          </div>

          <div className="relative sm:w-48">
            <div className="absolute inset-0 bg-border rounded-xl translate-x-1 translate-y-1 -z-10"></div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative z-10 w-full flex items-center justify-between px-4 py-3 bg-fg text-bg font-semibold border-2 border-border rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{selectedCategory}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-fg border-2 border-border rounded-xl overflow-hidden z-20 shadow-[4px_4px_0px_0px] shadow-border"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-bg hover:bg-border transition-colors duration-200 ${
                        selectedCategory === category
                          ? "bg-border font-semibold"
                          : ""
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.02,
                }}
                style={{ perspective: "1000px" }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-border rounded-xl translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>

                <div className="relative z-10 px-6 py-3 bg-fg text-bg font-semibold rounded-xl border-2 border-border group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 transform group-hover:scale-105 cursor-default">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSkills.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-fg opacity-60 mt-12"
          >
            No skills found matching your criteria
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
