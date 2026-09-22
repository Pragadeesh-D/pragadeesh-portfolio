import ProjectCard from '../ui/ProjectCard';
import { featuredProjects } from '../../data/projects';
import '../../styles/projects.css';

export default function FeaturedProjects() {
  return (
    <section className="section" id="projects" aria-labelledby="featured-projects-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Engineering Showcase</span>
          <h2 id="featured-projects-heading" className="section__title">
            Featured Projects
          </h2>
          <p className="section__subtitle">
            Core systems and applications I have engineered, spanning AI-assisted workflows,
            full-stack tools, and academic simulation systems.
          </p>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
