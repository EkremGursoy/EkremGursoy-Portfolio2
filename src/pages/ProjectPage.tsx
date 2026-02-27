import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { projects } from "../data/projects";
import Tag from "../components/Tag";
import Button from "../components/Button";
import githubBlack from "../assets/icons/github-black.svg";
import linkWhite from "../assets/icons/link-white.svg";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

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
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <button
            onClick={copyLink}
            title="Copy link to this page"
            className="flex items-center gap-1.5 text-sm text-text-muted border border-[#ddd] rounded-[5px] px-3 py-1.5 hover:border-black hover:text-black transition-colors cursor-pointer shrink-0 mt-1"
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                  <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 005.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                </svg>
                Copy Link
              </>
            )}
          </button>
        </div>

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
