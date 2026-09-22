import ExperienceCard from '../ui/ExperienceCard';
import { experiences } from '../../data/experience';
import '../../styles/experience.css';

export default function Experience() {
  return (
    <section className="section section--alt" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Practical Training</span>
          <h2 id="experience-heading" className="section__title">
            Internship Experience
          </h2>
          <p className="section__subtitle">
            Hands-on programming internships and practical training experiences.
          </p>
        </div>

        <div className="experience__list">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
