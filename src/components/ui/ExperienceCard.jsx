import { FileText } from 'lucide-react';
import { GithubIcon } from './Icons';
import '../../styles/experience.css';

export default function ExperienceCard({ experience }) {
  const {
    company,
    role,
    type,
    duration,
    durationNote,
    description,
    responsibilities,
    technologies,
    githubUrl,
    certificateUrl,
    projects,
  } = experience;

  return (
    <article className="experience-card">
      <div className="experience-card__top">
        <div className="experience-card__meta">
          <h3 className="experience-card__role">{role}</h3>
          <span className="experience-card__company">{company}</span>
          <span className="experience-card__type">{type}</span>
        </div>
        <div className="experience-card__duration">
          <span className="experience-card__date">{duration}</span>
          {durationNote && (
            <span className="experience-card__length">{durationNote}</span>
          )}
        </div>
      </div>

      <p className="experience-card__description">{description}</p>

      {responsibilities && responsibilities.length > 0 && (
        <ul className="experience-card__responsibilities" aria-label="Key responsibilities and contributions">
          {responsibilities.map((resp, idx) => (
            <li key={idx}>{resp}</li>
          ))}
        </ul>
      )}

      {projects && projects.length > 0 && (
        <>
          <div className="experience-card__projects-label">Developed Applications:</div>
          <div className="experience-card__project-list">
            {projects.map((proj) => (
              <span key={proj} className="tag tag--accent">
                {proj}
              </span>
            ))}
          </div>
        </>
      )}

      {technologies && technologies.length > 0 && (
        <div className="experience-card__tech tech-list">
          {technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="experience-card__actions">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            aria-label={`View ${company} internship code repository on GitHub`}
          >
            <GithubIcon size={14} aria-hidden="true" />
            Repository
          </a>
        )}
        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
            aria-label={`View ${company} internship certificate`}
          >
            <FileText size={14} aria-hidden="true" />
            Certificate
          </a>
        )}
      </div>
    </article>
  );
}
