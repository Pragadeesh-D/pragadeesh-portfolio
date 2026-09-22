import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import '../../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">
            Pragadeesh<span>.</span>
          </p>
          <p className="footer__copy">
            2026 B.E. Computer Science &amp; Engineering Graduate
          </p>
        </div>

        <p className="footer__copy">© {year} Pragadeesh D</p>

        <nav className="footer__links" aria-label="Footer links">
          <a
            href="https://github.com/Pragadeesh-D"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
          >
            <GithubIcon size={14} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pragadeesh-d-4041a52a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={14} /> LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
