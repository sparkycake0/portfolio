import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  id: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  id,
}) => {
  return (
    <div
      className="w-full h-full bg-fg border-2 border-border rounded-2xl p-6 flex flex-col justify-between shadow-[8px_8px_0px_0px] shadow-shadow hover:shadow-[12px_12px_0px_0px] hover:shadow-shadow hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 transform hover:scale-[1.02] group"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div>
        <Link
          href={`/${id}`}
          className="text-bg font-bold text-2xl mb-3 block hover:underline transition-all duration-300"
        >
          {title}
        </Link>
        <p className="text-bg text-base mb-4 opacity-90 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-bg text-fg text-sm font-semibold rounded-lg border border-border hover:shadow-[3px_3px_0px_0px] hover:shadow-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
