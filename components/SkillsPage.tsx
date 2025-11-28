"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";

// GENERAL TECHNICAL SKILLS
const generalSkills = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "Dart", category: "Languages" },
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "React", category: "Frameworks & Libraries" },
  { name: "Next.js", category: "Frameworks & Libraries" },
  { name: "Expo", category: "Frameworks & Libraries" },
  { name: "React Native", category: "Frameworks & Libraries" },
  { name: "Fastify", category: "Frameworks & Libraries" },
  { name: "Three.js", category: "Frameworks & Libraries" },
  { name: "Framer Motion", category: "Frameworks & Libraries" },
  { name: "Jotai", category: "Frameworks & Libraries" },
  { name: "React Query", category: "Frameworks & Libraries" },
  { name: "Socket.io", category: "Frameworks & Libraries" },
  { name: "Tailwind CSS", category: "Frameworks & Libraries" },
  { name: "NativeWind", category: "Frameworks & Libraries" },
  { name: "Node.js", category: "Backend & Infrastructure" },
  { name: "Prisma", category: "Backend & Infrastructure" },
  { name: "Firebase", category: "Backend & Infrastructure" },
  { name: "API", category: "Backend & Infrastructure" },
  { name: "Git", category: "Tools" },
  { name: "Linux", category: "Systems & Dev Environment" },
];

const personalSkills = [
  { name: "Teamwork" },
  { name: "Consistency" },
  { name: "Strong Will to Learn" },
  { name: "Discipline" },
  { name: "Communication" },
  { name: "Problem Solving" },
  { name: "Adaptability" },
  { name: "Self-Motivation" },
  { name: "Reliability" },
];
const createCategories = (skills) => [
  "All",
  ...Array.from(new Set(skills.map((s) => s.category))),
];

const SkillsSection = ({ title, skills }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = createCategories(skills);

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isPersonalSection = title === "Personal Skills";

  return (
    <div className="mb-24">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-fg mb-6 text-center"
      >
        {title}
      </motion.h3>

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
              placeholder={`Search ${title.toLowerCase()}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 bg-transparent text-bg placeholder-bg placeholder-opacity-60 outline-none"
            />
          </div>
        </div>

        {/* Only show dropdown for non-personal skills */}
        {!isPersonalSection && (
          <div className="relative sm:w-48">
            <div className="absolute inset-0 bg-border rounded-xl translate-x-1 translate-y-1 -z-10"></div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative z-10 w-full flex items-center justify-between px-4 py-3 bg-fg text-bg font-semibold border-2 border-border rounded-xl"
            >
              <span>{selectedCategory}</span>
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-fg border-2 border-border rounded-xl overflow-hidden z-20"
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
        )}
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-border rounded-xl translate-x-1.5 translate-y-1.5"></div>

              <div className="relative z-10 px-6 py-3 bg-fg text-bg font-semibold rounded-xl border-2 border-border cursor-default">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredSkills.length === 0 && (
        <p className="text-center text-fg opacity-60 mt-12">No skills found</p>
      )}
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div id="skillsPage" className="w-full min-h-max bg-bg py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-5xl font-bold text-fg mb-16 text-center"
        >
          Skills
        </motion.h2>

        <SkillsSection title="General Skills" skills={generalSkills} />
        <SkillsSection title="Personal Skills" skills={personalSkills} />
      </div>
    </div>
  );
};

export default SkillsPage;
