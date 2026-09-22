import AchievementCard from '../ui/AchievementCard';
import { hackathons } from '../../data/hackathons';
import '../../styles/hackathons.css';

export default function Hackathons() {
  return (
    <section className="section" id="achievements" aria-labelledby="achievements-heading">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Competitions &amp; Hackathons</span>
          <h2 id="achievements-heading" className="section__title">
            Hackathons &amp; Achievements
          </h2>
          <p className="section__subtitle">
            Competitive programming events, hackathons, and challenge submissions where I engineered
            solutions under tight deadlines.
          </p>
        </div>

        <div className="hackathons__grid">
          {hackathons.map((item) => (
            <AchievementCard key={item.id} hackathon={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
