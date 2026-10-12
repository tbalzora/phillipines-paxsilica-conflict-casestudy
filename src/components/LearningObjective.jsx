import {
  Compass,
  Cpu,
  Layers,
  MessageCircle,
  Network,
} from 'lucide-react';
import styles from './LearningObjective.module.css';

const icons = [Cpu, Layers, Network, MessageCircle, Compass];

export default function LearningObjective({ objectives }) {
  return (
    <ol className={styles.list}>
      {objectives.map((item, index) => {
        const Icon = icons[index];
        return (
          <li key={item} className={styles.item}>
            <div className={styles.marker} aria-hidden="true">
              <Icon strokeWidth={1.8} />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p>{item}</p>
          </li>
        );
      })}
    </ol>
  );
}
