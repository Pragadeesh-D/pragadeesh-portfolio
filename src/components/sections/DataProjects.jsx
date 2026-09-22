import ProjectCard from '../ui/ProjectCard';
import { dataProjects } from '../../data/projects';
import '../../styles/projects.css';

export default function DataProjects() {
  return (
    <section className="section section--alt" id="data-analytics" aria-labelledby="data-analytics-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Analytics &amp; Business Intelligence</span>
          <h2 id="data-analytics-heading" className="section__title">
            Data Analytics Projects
          </h2>
          <p className="section__subtitle">
            Exploratory data analysis, SQL-driven querying, and dashboard reporting across e-commerce,
            streaming media catalogs, and public safety datasets.
          </p>
        </div>

        <div className="data-grid">
          {dataProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
