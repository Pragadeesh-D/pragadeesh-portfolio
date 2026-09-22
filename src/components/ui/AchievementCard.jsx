import { Trophy, Medal, Star, Zap } from 'lucide-react';
import '../../styles/hackathons.css';

const ICON_MAP = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  zap: Zap,
};

export default function AchievementCard({ hackathon }) {
  const { event, year, achievements, highlight } = hackathon;

  return (
    <article className={`hackathon-card${highlight ? ' hackathon-card--highlight' : ''}`}>
      <h3 className="hackathon-card__event">{event}</h3>
      {year && <p className="hackathon-card__year">{year}</p>}

      <div className="hackathon-card__achievements">
        {achievements.map((item, idx) => {
          const IconComponent = ICON_MAP[item.icon] || Trophy;
          let prizeModifier = '';
          if (item.prize.toLowerCase().includes('participant')) {
            prizeModifier = ' achievement-item__prize--participant';
          } else if (item.prize.toLowerCase().includes('solo')) {
            prizeModifier = ' achievement-item__prize--solo';
          }

          return (
            <div key={idx} className="achievement-item">
              <div className={`achievement-item__icon achievement-item__icon--${item.icon}`}>
                <IconComponent size={18} aria-hidden="true" />
              </div>
              <div className="achievement-item__content">
                <div className={`achievement-item__prize${prizeModifier}`}>
                  {item.prize}
                </div>
                <div className="achievement-item__project">{item.project}</div>
                {item.description && (
                  <p className="achievement-item__desc">{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
