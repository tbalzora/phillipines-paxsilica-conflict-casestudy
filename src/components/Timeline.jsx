import { useId, useRef, useState } from 'react';
import { figures } from '../data/figures';
import { getSourceById } from '../data/sources';
import ExternalLink from './ExternalLink';
import Figure from './Figure';
import styles from './Timeline.module.css';

export default function Timeline({ entries }) {
  const [active, setActive] = useState(0);
  const buttons = useRef([]);
  const baseId = useId();
  const current = entries[active];
  const sources = (current?.sourceIds ?? [])
    .map((id) => getSourceById(id))
    .filter(Boolean);

  const select = (index, shouldFocus = false) => {
    const total = entries.length;
    const next = (index + total) % total;
    setActive(next);
    if (shouldFocus) {
      buttons.current[next]?.focus();
    }
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      select(active + 1, true);
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      select(active - 1, true);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      select(0, true);
    }
    if (event.key === 'End') {
      event.preventDefault();
      select(entries.length - 1, true);
    }
  };

  if (!current) return null;

  return (
    <div className={styles.wrap}>
      <div
        className={styles.track}
        role="tablist"
        aria-label="Case timeline"
        onKeyDown={onKeyDown}
      >
        {entries.map((entry, index) => {
          const selected = index === active;
          const figure = figures[entry.figureId];
          return (
            <button
              key={entry.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${entry.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              ref={(node) => {
                buttons.current[index] = node;
              }}
              className={`${styles.step} ${selected ? styles.stepActive : ''}`}
              onClick={() => select(index)}
            >
              {figure ? (
                <img
                  className={figure.fit === 'contain' ? styles.thumbContain : styles.thumb}
                  src={figure.src}
                  alt=""
                />
              ) : null}
              <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.stepDate}>{entry.date}</span>
            </button>
          );
        })}
      </div>

      <article
        key={current.id}
        className={styles.panel}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${current.id}`}
        tabIndex={0}
      >
        <div className={styles.panelBody}>
          {current.figureId ? (
            <Figure id={current.figureId} caption={current.figureCaption} />
          ) : null}
          <div>
            <p className={styles.meta}>
              <time>{current.date}</time>
              <span>
                {active + 1} of {entries.length}
              </span>
            </p>
            <h3 className={styles.title}>{current.title}</h3>
            <p className={styles.summary}>{current.summary}</p>
            {sources.length > 0 ? (
              <ul className={styles.sources}>
                {sources.map((source) => (
                  <li key={source.id}>
                    <ExternalLink href={source.url}>{source.title}</ExternalLink>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className={styles.nav}>
              <button type="button" onClick={() => select(active - 1, true)}>
                Previous
              </button>
              <button type="button" onClick={() => select(active + 1, true)}>
                Next
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
