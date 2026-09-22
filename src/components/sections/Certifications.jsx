import CertCard from '../ui/CertCard';
import { certifications } from '../../data/certifications';
import '../../styles/certifications.css';

export default function Certifications() {
  return (
    <section className="section" id="certifications" aria-labelledby="certifications-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Verified Learning</span>
          <h2 id="certifications-heading" className="section__title">
            Certifications &amp; Credentials
          </h2>
          <p className="section__subtitle">
            Technical certifications and training completions, with direct verification links for supported credentials.
          </p>
        </div>

        <div className="certs__grid">
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
