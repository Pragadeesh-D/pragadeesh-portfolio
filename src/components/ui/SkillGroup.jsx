import { Code2, Layers, BarChart3, Cpu, Database } from 'lucide-react';
import '../../styles/skills.css';

const ICONS = { Code2, Layers, BarChart3, Cpu, Database };

/**
 * SkillGroup — renders a single skill category card with tag-cloud items.
 * No percentage bars.
 */
export default function SkillGroup({ group }) {
  const { label, primary, icon, skills } = group;
  const Icon = ICONS[icon] || Code2;

  return (
    <div className={`skill-group${primary ? ' skill-group--primary' : ''}`}>
      <div className="skill-group__header">
        <Icon
          size={18}
          className="skill-group__header-icon"
          aria-hidden="true"
        />
        <span className="skill-group__label">{label}</span>
        {primary && (
          <span className="skill-group__primary-badge" aria-label="Primary skill area">
            Primary
          </span>
        )}
      </div>

      <div className="skill-group__tags" role="list" aria-label={`${label} skills`}>
        {skills.map((skill) => (
          <span key={skill} className="skill-tag" role="listitem">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
