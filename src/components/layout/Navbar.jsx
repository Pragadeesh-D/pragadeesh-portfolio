import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import '../../styles/navbar.css';

const NAV_LINKS = [
  { label: 'About',           href: '/#about' },
  { label: 'Projects',        href: '/#projects' },
  { label: 'Experience',      href: '/#experience' },
  { label: 'Achievements',    href: '/#achievements' },
  { label: 'Skills',          href: '/#skills' },
  { label: 'Certifications',  href: '/#certifications' },
  { label: 'Resume',          href: '/#resume' },
  { label: 'Contact',         href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [active, setActive]       = useState('');
  const location = useLocation();

  // Scroll state for background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location]);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Issue 2: auto-close mobile menu when viewport widens past the desktop breakpoint
  const DESKTOP_BREAKPOINT = 768;
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Issue 1: lock / unlock body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // ── Scroll-spy: highlight the section currently in view ───────────────
  // Uses a single scroll listener instead of per-section IntersectionObservers.
  // On every scroll tick it measures each section's distance from just below
  // the navbar and picks the one that is "most in view" — the last section
  // whose top edge has already scrolled above the midpoint of the viewport.
  // This is deterministic: no race between observer callbacks.
  useEffect(() => {
    if (location.pathname !== '/') return;

    const SECTION_IDS = [
      'about', 'projects', 'experience', 'achievements',
      'skills', 'certifications', 'resume', 'contact',
    ];

    const NAV_H = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-height') || '64',
      10,
    );
    // The "activation line" is the navbar bottom + 20 % of viewport height
    const activationOffset = () => NAV_H + window.innerHeight * 0.2;

    const updateActive = () => {
      const offset = activationOffset();
      let current = '';

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // Section is considered "active" once its top has passed the activation line
        if (top <= offset) {
          current = id;
        }
      }

      setActive(current);
    };

    // Run once on mount so the correct item is active on first render
    updateActive();

    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, [location]);

  const isActive = (href) => {
    const id = href.replace('/#', '');
    return active === id;
  };

  const handleNavClick = (href) => {
    setOpen(false);
    if (location.pathname !== '/') return;
    const id = href.replace('/#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Logo */}
          <Link
            to="/"
            className="navbar__logo"
            aria-label="Pragadeesh D — Home"
            onClick={() => {
              setOpen(false);
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Pragadeesh D
          </Link>

          {/* Desktop links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`navbar__link${isActive(href) ? ' active' : ''}`}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      handleNavClick(href);
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="navbar__actions">
            <a
              href="https://github.com/Pragadeesh-D"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__icon-link"
              aria-label="GitHub profile"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pragadeesh-d-4041a52a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__icon-link"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a href="/#contact" className="btn btn--primary btn--sm">
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="navbar__bar" />
            <span className="navbar__bar" />
            <span className="navbar__bar" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${open ? ' open' : ''}`}
        aria-hidden={!open}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="navbar__mobile-link"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                handleNavClick(href);
              } else {
                setOpen(false);
              }
            }}
          >
            {label}
          </a>
        ))}
        <div className="navbar__mobile-divider" />
        <div className="navbar__mobile-actions">
          <a
            href="https://github.com/Pragadeesh-D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
          >
            <GithubIcon size={14} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pragadeesh-d-4041a52a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary btn--sm"
          >
            <LinkedinIcon size={14} /> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
