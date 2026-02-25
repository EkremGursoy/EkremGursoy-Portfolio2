import { Link } from "react-router";
import type { Project } from "../data/projects";
import Tag from "./Tag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="flex flex-col gap-2 p-4 rounded-[5px] shadow-card cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img
        src={project.image}
        alt={`${project.title} Screenshot`}
        className="w-full h-48 object-cover object-top rounded-[3px]"
      />
      <h3 className="text-2xl font-bold">{project.title}</h3>
      <p className="text-sm">{project.shortDescription}</p>
      <div className="flex flex-wrap gap-2 mt-2 mb-2.5">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <span className="mt-auto text-sm font-medium text-text-muted">
        View Project →
      </span>
    </Link>
  );
}
