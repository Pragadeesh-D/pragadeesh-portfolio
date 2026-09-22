import { ArrowDown, FileText, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import '../../styles/hero.css';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          <span>Open to Entry-Level Opportunities &bull; 2026 Graduate</span>
        </div>

        <h1 className="hero__name">Pragadeesh D</h1>

        <p className="hero__role">
          <span className="hero__role-accent">Software Developer</span> | 2026 CSE Graduate
        </p>

        <p className="hero__description">
          I build software applications and data-driven solutions using Java, Python, SQL,
          and modern development tools. Focused on building practical systems with solid engineering foundations.
        </p>

        <div className="hero__chips" aria-label="Core focus technologies">
          <span className="hero__chip">Java</span>
          <span className="hero__chip">Python</span>
          <span className="hero__chip">SQL / MySQL</span>
          <span className="hero__chip">JavaScript</span>
          <span className="hero__chip">AI Applications</span>
          <span className="hero__chip">Data Analytics</span>
        </div>

        <div className="hero__ctas">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn btn--primary"
            aria-label="Navigate to projects section"
          >
            <Code2 size={16} aria-hidden="true" />
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('resume')}
            className="btn btn--secondary"
            aria-label="Navigate to resume section"
          >
            <FileText size={16} aria-hidden="true" />
            Download Resume
          </button>
        </div>

        <div className="hero__socials">
          <a
            href="https://github.com/Pragadeesh-D"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub Profile (opens in a new tab)"
          >
            <GithubIcon size={18} aria-hidden="true" />
            <span className="hero__social-label">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pragadeesh-d-4041a52a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn Profile (opens in a new tab)"
          >
            <LinkedinIcon size={18} aria-hidden="true" />
            <span className="hero__social-label">LinkedIn</span>
          </a>
        </div>

        <div className="hero__built">
          <div className="hero__built-label">What I have built</div>
          <div className="hero__built-items">
            <div className="hero__built-item">
              <span className="hero__built-dot" />
              <span>AI-Powered Applications</span>
            </div>
            <div className="hero__built-item">
              <span className="hero__built-dot" />
              <span>Web Applications</span>
            </div>
            <div className="hero__built-item">
              <span className="hero__built-dot" />
              <span>Data Analytics Projects</span>
            </div>
            <div className="hero__built-item">
              <span className="hero__built-dot" />
              <span>Academic Engineering Systems</span>
            </div>
            <div className="hero__built-item">
              <span className="hero__built-dot" />
              <span>Hackathon Projects</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
