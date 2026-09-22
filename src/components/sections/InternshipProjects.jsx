import { FolderCode } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { internshipProjects } from '../../data/projects';
import '../../styles/projects.css';

export default function InternshipProjects() {
  return (
    <section className="section" id="software-projects" aria-labelledby="software-projects-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Additional Software Work</span>
          <h2 id="software-projects-heading" className="section__title">
            Java Internship Applications
          </h2>
          <p className="section__subtitle">
            Core Java applications developed during my virtual programming internship at CodSoft,
            reinforcing object-oriented design, collections, and I/O mechanics.
          </p>
        </div>

        <div className="internship-grid">
          {internshipProjects.map((item) => (
            <div key={item.id} className="internship-card">
              <h3 className="internship-card__name">{item.name}</h3>
              <p className="internship-card__desc">{item.description}</p>
              <div className="internship-card__tech">
                {item.technologies.map((t) => (
                  <span key={t} className="tag tag--sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--sp-6)', display: 'flex', alignItems: 'center', gap: 'var(--sp-4)', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Pragadeesh-D/CODSOFT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
            aria-label="View all CodSoft Java internship projects on GitHub"
          >
            <GithubIcon size={14} aria-hidden="true" />
            View Repository on GitHub
          </a>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            All 5 applications hosted in a single organized repository.
          </span>
        </div>
      </div>
    </section>
  );
}
