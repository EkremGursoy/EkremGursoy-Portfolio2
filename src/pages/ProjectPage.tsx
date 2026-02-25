import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import Tag from "../components/Tag";
import Button from "../components/Button";
import githubBlack from "../assets/icons/github-black.svg";
import linkWhite from "../assets/icons/link-white.svg";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center gap-6 py-24 w-full">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <p className="text-text-muted">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="px-4 py-2 rounded-[5px] border border-black bg-black text-white"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article className="flex flex-col gap-8 w-full pt-4">
      {/* Back link */}
      <Link
        to="/"
        className="text-text-muted hover:text-text-primary text-sm w-fit"
      >
        ← Back to Projects
      </Link>

      {/* Project image */}
      <img
        src={project.image}
        alt={`${project.title} Screenshot`}
        className="w-full rounded-[5px] object-cover max-h-120 shadow-card"
      />

      {/* Title + tags + buttons */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" href={project.repoUrl} icon={githubBlack} className="text-sm whitespace-nowrap">
            Repository Link
          </Button>
          <Button href={project.liveUrl} icon={linkWhite} className="text-sm whitespace-nowrap">
            Live Site
          </Button>
        </div>
      </div>

      {/* Full description */}
      <div className="flex flex-col gap-5 text-lg leading-relaxed">
        {project.fullDescription.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex justify-between items-center pt-8 border-t border-bg-tag">
        <Link to="/" className="text-text-muted hover:text-text-primary text-sm">
          ← Back to Projects
        </Link>
        <Button href={project.liveUrl} icon={linkWhite} className="text-sm">
          View Live Site
        </Button>
      </div>
    </article>
  );
}
