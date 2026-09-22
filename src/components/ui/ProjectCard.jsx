import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, AlertTriangle } from 'lucide-react';
import { GithubIcon } from './Icons';

/**
 * ProjectCard — used for both featured and data analytics projects.
 * Props match the shape defined in src/data/projects.js
 */
export default function ProjectCard({ project, size = 'normal' }) {
  const {
    id,
    name,
    tagline,
    category,
    categoryColor,
    technologies,
    githubUrl,
    liveUrl,
    context,
    disclaimer,
    type,
  } = project;

  return (
    <article className="project-card" aria-labelledby={`proj-${id}-title`}>
      {/* Top row: badges + context */}
      <div className="project-card__top">
        <div className="project-card__badges">
          <span className={`cat-badge cat-badge--${categoryColor}`}>
            {category}
          </span>
          {type === 'featured' && context && (
            <span className="tag">{context}</span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 id={`proj-${id}-title`} className="project-card__title">
        {name}
      </h3>

      {/* Tagline */}
      <p className="project-card__tagline">{tagline}</p>

      {/* Disclaimer (only when present) */}
      {disclaimer && (
        <div className="project-card__disclaimer" role="note">
          <AlertTriangle size={14} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
          <span>{disclaimer}</span>
        </div>
      )}

      {/* Tech stack */}
      <div className="project-card__tech tech-list">
        {technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="project-card__actions">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            aria-label={`GitHub repository for ${name}`}
          >
            <GithubIcon size={14} aria-hidden="true" />
            GitHub
          </a>
        )}

        {/* ONLY show Live Demo if an actual URL exists */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
            aria-label={`Live demo for ${name}`}
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live Demo
          </a>
        )}

        {/* Case study only for featured projects with detailed data */}
        {type === 'featured' && (
          <Link
            to={`/case-study/${id}`}
            className="btn btn--ghost btn--sm"
            aria-label={`Read case study for ${name}`}
          >
            <BookOpen size={14} aria-hidden="true" />
            Case Study
          </Link>
        )}

        {/* README link for data projects */}
        {project.readmeUrl && (
          <a
            href={project.readmeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
            aria-label={`README for ${name}`}
          >
            <BookOpen size={14} aria-hidden="true" />
            README
          </a>
        )}
      </div>
    </article>
  );
}
