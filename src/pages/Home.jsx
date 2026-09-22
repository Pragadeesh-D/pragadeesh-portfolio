import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import DataProjects from '../components/sections/DataProjects';
import InternshipProjects from '../components/sections/InternshipProjects';
import Experience from '../components/sections/Experience';
import Hackathons from '../components/sections/Hackathons';
import Skills from '../components/sections/Skills';
import Certifications from '../components/sections/Certifications';
import Resume from '../components/sections/Resume';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <FeaturedProjects />
      <DataProjects />
      <InternshipProjects />
      <Experience />
      <Hackathons />
      <Skills />
      <Certifications />
      <Resume />
      <Contact />
    </main>
  );
}
