import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../ui/Icons';
import '../../styles/contact.css';

export const CANDIDATE_EMAIL = 'dpragadeesh66@gmail.com';

export default function Contact() {

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Get In Touch</span>
          <h2 id="contact-heading" className="section__title">
            Contact &amp; Connect
          </h2>
          <p className="section__subtitle">
            Open to discussing entry-level Software Developer / Engineer opportunities,
            Data Analyst positions, or technical collaborations.
          </p>
        </div>

        <div className="contact__layout">
          <div>
            <p className="contact__intro">
              I am actively exploring entry-level roles starting in 2026. Feel free to reach out directly via LinkedIn or explore my code on GitHub.
            </p>

            <div className="contact__channels">
              {/* LinkedIn channel */}
              <a
                href="https://www.linkedin.com/in/pragadeesh-d-4041a52a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
                aria-label="Connect on LinkedIn (opens in a new tab)"
              >
                <div className="contact__channel-icon">
                  <LinkedinIcon size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact__channel-label">Professional Network</div>
                  <div className="contact__channel-value">linkedin.com/in/pragadeesh-d-4041a52a6</div>
                </div>
                <ArrowRight size={18} className="contact__channel-arrow" aria-hidden="true" />
              </a>

              {/* GitHub channel */}
              <a
                href="https://github.com/Pragadeesh-D"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__channel"
                aria-label="View GitHub repositories (opens in a new tab)"
              >
                <div className="contact__channel-icon">
                  <GithubIcon size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact__channel-label">Code Repositories</div>
                  <div className="contact__channel-value">github.com/Pragadeesh-D</div>
                </div>
                <ArrowRight size={18} className="contact__channel-arrow" aria-hidden="true" />
              </a>

              {/* Email channel */}
              <a
                href={`mailto:${CANDIDATE_EMAIL}`}
                className="contact__channel"
                aria-label="Send a direct email"
              >
                <div className="contact__channel-icon">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="contact__channel-label">Direct Email</div>
                  <div className="contact__channel-value">{CANDIDATE_EMAIL}</div>
                </div>
                <ArrowRight size={18} className="contact__channel-arrow" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="contact__right">
            <div className="contact__availability">
              <h3 className="contact__avail-title">Availability &amp; Preferences</h3>
              <div className="contact__avail-items">
                <div className="contact__avail-item">
                  <span className="contact__avail-dot" />
                  <span><strong>Status:</strong> 2026 B.E. CSE Graduate &bull; Open to Work</span>
                </div>
                <div className="contact__avail-item">
                  <span className="contact__avail-dot" />
                  <span><strong>Primary Target:</strong> Software Developer / Software Engineer</span>
                </div>
                <div className="contact__avail-item">
                  <span className="contact__avail-dot" />
                  <span><strong>Secondary Target:</strong> Data Analyst / Junior Data Analyst / QA</span>
                </div>
                <div className="contact__avail-item">
                  <span className="contact__avail-dot" />
                  <span><strong>Base Location:</strong> Chennai / Tamil Nadu, India</span>
                </div>
                <div className="contact__avail-item">
                  <span className="contact__avail-dot" />
                  <span><strong>Flexibility:</strong> Open to India-wide, Remote, Hybrid &amp; Relocation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
