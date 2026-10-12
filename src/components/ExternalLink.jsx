import styles from './ExternalLink.module.css';

export default function ExternalLink({ href, children, className = '' }) {
  if (!href) {
    return (
      <span className={`${styles.unavailable} ${className}`.trim()}>
        Link unavailable
      </span>
    );
  }

  return (
    <a
      href={href}
      className={`${styles.link} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <span className={styles.badge} aria-hidden="true">
        External
      </span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
