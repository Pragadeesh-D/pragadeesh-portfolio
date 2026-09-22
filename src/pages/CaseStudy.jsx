import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, AlertTriangle, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/ui/Icons';
import { featuredProjects, dataProjects } from '../data/projects';
import '../styles/casestudy.css';

const ALL_PROJECTS = [...featuredProjects, ...dataProjects];

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = ALL_PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container casestudy casestudy__notfound">
        <h1>Project Case Study Not Found</h1>
        <p>The requested project case study could not be located.</p>
        <div style={{ marginTop: 'var(--sp-6)' }}>
          <Link to="/" className="btn btn--primary">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const {
    name,
    tagline,
    category,
    categoryColor,
    context,
    disclaimer,
    overview,
    problem,
    goal,
    approach,
    architecture,
    technologies,
    features,
    challenges,
    results,
    githubUrl,
    liveUrl,
    readmeUrl,
  } = project;

  return (
    <div className="casestudy">
      <div className="container">
        {/* Navigation back */}
        <Link to="/#projects" className="casestudy__back" aria-label="Return to portfolio projects">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        {/* Header */}
        <header className="casestudy__header">
          <div className="casestudy__badges">
            <span className={`cat-badge cat-badge--${categoryColor}`}>
              {category}
            </span>
            {context && <span className="tag">{context}</span>}
          </div>

          <h1 className="casestudy__title">{name}</h1>
          <p className="casestudy__tagline">{tagline}</p>

          <div className="casestudy__actions">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                aria-label={`View ${name} source code on GitHub`}
              >
                <GithubIcon size={16} aria-hidden="true" />
                View Repository on GitHub
              </a>
            )}

            {/* ONLY show Live Demo if genuine confirmed URL exists */}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                aria-label={`Open live demonstration of ${name}`}
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Demo
              </a>
            )}

            {readmeUrl && (
              <a
                href={readmeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
                aria-label={`Read technical README for ${name}`}
              >
                <ExternalLink size={16} aria-hidden="true" />
                Technical README
              </a>
            )}
          </div>
        </header>

        {/* Disclaimer if present */}
        {disclaimer && (
          <aside className="casestudy__disclaimer" role="note">
            <AlertTriangle size={20} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
            <div>
              <strong>Important Scope Note: </strong>
              <span>{disclaimer}</span>
            </div>
          </aside>
        )}

        {/* Body grid */}
        <div className="casestudy__body">
          <main className="casestudy__main">
            {/* 1. Overview */}
            {overview && (
              <section className="casestudy__section" aria-labelledby="cs-overview">
                <h2 id="cs-overview" className="casestudy__section-title">Overview</h2>
                <p className="casestudy__text">{overview}</p>
              </section>
            )}

            {/* 2. Problem */}
            {problem && (
              <section className="casestudy__section" aria-labelledby="cs-problem">
                <h2 id="cs-problem" className="casestudy__section-title">Problem Statement</h2>
                <p className="casestudy__text">{problem}</p>
              </section>
            )}

            {/* 3. Goal */}
            {goal && (
              <section className="casestudy__section" aria-labelledby="cs-goal">
                <h2 id="cs-goal" className="casestudy__section-title">Project Goal</h2>
                <p className="casestudy__text">{goal}</p>
              </section>
            )}

            {/* 4. Approach */}
            {approach && (
              <section className="casestudy__section" aria-labelledby="cs-approach">
                <h2 id="cs-approach" className="casestudy__section-title">Engineering Approach</h2>
                <p className="casestudy__text">{approach}</p>
              </section>
            )}

            {/* 5. Architecture & Workflow */}
            {architecture && (
              <section className="casestudy__section" aria-labelledby="cs-arch">
                <h2 id="cs-arch" className="casestudy__section-title">Architecture &amp; Workflow</h2>
                <div className="casestudy__arch" role="region" aria-label="System Architecture Flow">
                  {architecture}
                </div>
              </section>
            )}

            {/* 6. Challenges & Learnings */}
            {challenges && challenges.length > 0 && (
              <section className="casestudy__section" aria-labelledby="cs-challenges">
                <h2 id="cs-challenges" className="casestudy__section-title">Technical Challenges &amp; Learnings</h2>
                <ul className="casestudy__list">
                  {challenges.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 7. What Was Built / Results */}
            {results && (
              <section className="casestudy__section" aria-labelledby="cs-results">
                <h2 id="cs-results" className="casestudy__section-title">What I Built &amp; Findings</h2>
                <p className="casestudy__text">{results}</p>
              </section>
            )}
          </main>

          {/* Sidebar */}
          <aside className="casestudy__sidebar" aria-label="Project Meta Information">
            <div className="casestudy__sidebar-card">
              <h3 className="casestudy__sidebar-title">Technologies</h3>
              <div className="casestudy__sidebar-tech">
                {technologies.map((t) => (
                  <span key={t} className="tag tag--accent">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {features && features.length > 0 && (
              <div className="casestudy__sidebar-card">
                <h3 className="casestudy__sidebar-title">Key Capabilities</h3>
                <div className="casestudy__sidebar-features">
                  {features.map((f, idx) => (
                    <div key={idx} className="casestudy__sidebar-feature">
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
