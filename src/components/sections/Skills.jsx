import SkillGroup from '../ui/SkillGroup';
import { skillGroups } from '../../data/skills';
import '../../styles/skills.css';

export default function Skills() {
  return (
    <section className="section section--alt" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Technical Capabilities</span>
          <h2 id="skills-heading" className="section__title">
            Skills &amp; Technologies
          </h2>
          <p className="section__subtitle">
            Categorized technical skills with primary emphasis on core software engineering and object-oriented programming,
            complemented by analytical and applied machine learning tools.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
