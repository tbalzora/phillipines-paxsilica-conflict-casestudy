import {
  BrainCircuit,
  Building2,
  Cpu,
  Factory,
  Gem,
  Network,
} from 'lucide-react';
import styles from './StackDiagram.module.css';

const stepIcons = {
  materials: Gem,
  production: Factory,
  hardware: Cpu,
  facilities: Building2,
  networks: Network,
  models: BrainCircuit,
};

export default function StackDiagram({
  title,
  caption,
  steps = [],
  palette = 'cool',
  layout = 'linear',
}) {
  const items = steps.map((step, index) => {
    if (typeof step === 'string') {
      return { id: `step-${index}`, label: step, number: index + 1 };
    }
    const match = String(step.label).match(/^(\d+)\.\s*(.*)$/);
    return {
      id: step.id || `step-${index}`,
      label: match ? match[2] : step.label,
      number: match ? Number(match[1]) : index + 1,
      description: step.description,
      icon: step.icon,
    };
  });

  return (
    <figure
      className={`${styles.figure} ${styles[palette]} ${styles[layout]}`}
    >
      {title ? <figcaption className={styles.title}>{title}</figcaption> : null}
      <div className={layout === 'web' ? styles.webCanvas : undefined}>
        {layout === 'web' ? (
          <svg
            className={styles.connections}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="50" y1="50" x2="18" y2="17" />
            <line x1="50" y1="50" x2="82" y2="17" />
            <line x1="50" y1="50" x2="89" y2="50" />
            <line x1="50" y1="50" x2="82" y2="83" />
            <line x1="50" y1="50" x2="18" y2="83" />
            <line x1="50" y1="50" x2="11" y2="50" />
            <circle cx="50" cy="50" r="2" />
          </svg>
        ) : null}
        <ol className={styles.track} aria-label={caption || title || 'Process steps'}>
          {items.map((item, index) => {
            const Icon = stepIcons[item.icon];
            return (
              <li key={item.id} className={styles.step}>
                <div className={styles.node}>
                  <span className={styles.num} aria-hidden="true">
                    {Icon ? <Icon size={16} strokeWidth={2} /> : item.number}
                  </span>
                  <span className={styles.label}>{item.label}</span>
                  {item.description ? (
                    <span className={styles.description}>{item.description}</span>
                  ) : null}
                </div>
                {layout !== 'web' && index < items.length - 1 ? (
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            );
          })}
          {layout === 'web' ? (
            <li className={styles.webCore} aria-hidden="true">
              Machine learning infrastructure
            </li>
          ) : null}
        </ol>
      </div>
      {caption ? <p className={styles.caption}>{caption}</p> : null}
    </figure>
  );
}
