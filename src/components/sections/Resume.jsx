import { Download, FileText, ExternalLink } from 'lucide-react';
import '../../styles/footer.css';

// Configurable resume paths — actual PDFs are in /public
export const RESUME_PATHS = {
  swe:     '/resume-software-developer.pdf',
  data:    '/resume-data-analyst.pdf',
};

export default function Resume() {
  return (
    <section className="section section--alt" id="resume" aria-labelledby="resume-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Curriculum Vitae</span>
          <h2 id="resume-heading" className="section__title">
            Resume / Curriculum Vitae
          </h2>
          <p className="section__subtitle">
            Download targeted versions of my resume aligned with software development or data analytics opportunities.
          </p>
        </div>

        <div className="resume__layout">
          {/* Software Engineering Resume */}
          <div className="resume__card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
              <FileText size={24} style={{ color: 'var(--accent)' }} aria-hidden="true" />
              <h3 className="resume__card-title">Software Developer Resume</h3>
            </div>
            <p className="resume__card-desc">
              Highlights core software development proficiencies: Java, Python, OOP architecture, web application projects,
              AI integrations, and Git workflows. Best for Software Engineer, Full-Stack, or Junior Developer positions.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap' }}>
              <a
                href={RESUME_PATHS.swe}
                download="Pragadeesh_D_Software_Developer_Resume.pdf"
                className="btn btn--primary btn--sm"
                aria-label="Download Software Developer Resume"
              >
                <Download size={14} aria-hidden="true" />
                Download SWE Resume
              </a>
              <a
                href={RESUME_PATHS.swe}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
                aria-label="Preview Software Developer Resume in new tab"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Preview
              </a>
            </div>
          </div>

          {/* Data Analytics Resume */}
          <div className="resume__card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
              <FileText size={24} style={{ color: 'var(--cat-data)' }} aria-hidden="true" />
              <h3 className="resume__card-title">Data Analyst Resume</h3>
            </div>
            <p className="resume__card-desc">
              Focuses on quantitative problem solving: SQL querying, exploratory analysis with Pandas/NumPy,
              Power BI dashboards, Excel modeling, and large-scale dataset case studies. Best for Data Analyst or Business Intelligence roles.
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap' }}>
              <a
                href={RESUME_PATHS.data}
                download="Pragadeesh_D_Data_Analyst_Resume.pdf"
                className="btn btn--primary btn--sm"
                aria-label="Download Data Analyst Resume"
              >
                <Download size={14} aria-hidden="true" />
                Download Data Resume
              </a>
              <a
                href={RESUME_PATHS.data}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
                aria-label="Preview Data Analyst Resume in new tab"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
