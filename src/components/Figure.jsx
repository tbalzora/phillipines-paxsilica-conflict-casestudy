import { figures } from '../data/figures';
import styles from './Figure.module.css';

function Credit({ figure }) {
  return (
    <p className={styles.credit}>
      {figure.credit}.{' '}
      {figure.licenseUrl ? (
        <>
          <a href={figure.licenseUrl} target="_blank" rel="noopener noreferrer">
            {figure.license}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          {' · '}
        </>
      ) : null}
      <a href={figure.source} target="_blank" rel="noopener noreferrer">
        Source
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
      .
    </p>
  );
}

export default function Figure({ id, caption, className = '' }) {
  const figure = figures[id];
  if (!figure) return null;
  const fit = figure.fit === 'contain' ? styles.contain : styles.cover;

  return (
    <figure className={`${styles.figure} ${className}`.trim()}>
      <img className={fit} src={figure.src} alt={figure.alt} />
      <figcaption>
        <p>{caption ?? figure.caption}</p>
        <Credit figure={figure} />
      </figcaption>
    </figure>
  );
}

export function TextFigure({ id, caption, flip = false, below = [], children }) {
  return (
    <div className={styles.pair} data-flip={flip ? 'true' : 'false'}>
      <div className={styles.copy}>{children}</div>
      <div className={styles.stack}>
        <Figure id={id} caption={caption} />
        {below.map((item) => (
          <Figure key={item.id} id={item.id} caption={item.caption} />
        ))}
      </div>
    </div>
  );
}
