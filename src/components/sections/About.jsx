import { Terminal, CheckCircle2, GraduationCap, MapPin, Award, Layers } from 'lucide-react';
import '../../styles/about.css';

export default function About() {
  return (
    <section className="section section--alt" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Background</span>
          <h2 id="about-heading" className="section__title">About Me</h2>
          <p className="section__subtitle">
            An engineering graduate focused on software craftsmanship, data problem-solving, and practical AI implementation.
          </p>
        </div>

        <div className="about__layout">
          <div className="about__main">
            <p className="about__bio">
              I am a <strong>2026 B.E. Computer Science and Engineering graduate</strong> from Krishnasamy College of Engineering and Technology (CGPA: 8.43/10). My primary focus is on <strong>Software Development and Engineering</strong>, backed by hands-on project work in <strong>Java, Python, SQL, and modern web development</strong>.
            </p>

            <p className="about__bio">
              Beyond core software development, I have developed a strong secondary competency in <strong>Data Analytics</strong> (exploratory data analysis, SQL queries, Power BI dashboards) and built practical experience developing <strong>AI-assisted applications</strong> using OpenAI APIs, Streamlit, and Flask.
            </p>

            <div className="about__focus-areas">
              <div className="about__focus-item">
                <CheckCircle2 className="about__focus-icon" aria-hidden="true" />
                <span><strong>Software Engineering:</strong> Object-oriented design, modular programming, RESTful patterns, and full-lifecycle version control with Git &amp; GitHub.</span>
              </div>
              <div className="about__focus-item">
                <CheckCircle2 className="about__focus-icon" aria-hidden="true" />
                <span><strong>Data Analytics:</strong> Transforming raw datasets into structured SQL tables, analytical models, and visual dashboards for business insights.</span>
              </div>
              <div className="about__focus-item">
                <CheckCircle2 className="about__focus-icon" aria-hidden="true" />
                <span><strong>Practical AI:</strong> Integrating generative models into purposeful workflow tools (contract risk evaluation, bug triage classification).</span>
              </div>
              <div className="about__focus-item">
                <CheckCircle2 className="about__focus-icon" aria-hidden="true" />
                <span><strong>Target Opportunities:</strong> Entry-level Software Developer / Software Engineer roles, with openness to Data Analyst, QA, and technical associate positions.</span>
              </div>
            </div>
          </div>

          <aside className="about__card" aria-label="Quick Facts">
            <h3 className="about__card-title">Quick Facts</h3>

            <div className="about__fact">
              <span className="about__fact-label">Education</span>
              <span className="about__fact-value">B.E. Computer Science &amp; Engineering</span>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">Institution</span>
              <span className="about__fact-value">Krishnasamy College of Engineering &amp; Technology</span>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">Graduation Window</span>
              <span className="about__fact-value">Nov 2022 &ndash; May 2026</span>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">CGPA</span>
              <span className="about__fact-value">8.43 / 10</span>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">Current Status</span>
              <span className="about__fact-value">2026 CSE Graduate &bull; Fresher</span>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">Preferred Location</span>
              <span className="about__fact-value">Chennai / Tamil Nadu (Open to India-wide, Remote, Hybrid &amp; Relocation)</span>
            </div>

            <div className="about__fact">
              <span className="about__fact-label">Primary Languages</span>
              <span className="about__fact-value">Java &bull; Python &bull; SQL &bull; JavaScript</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
