import ExternalLink from './ExternalLink';
import styles from './SourceCard.module.css';

export default function SourceCard({ source }) {
  return (
    <article className={styles.card}>
      <p className={styles.category}>{source.category}</p>
      <h3 className={styles.title}>{source.title}</h3>
      <p className={styles.meta}>
        <span>{source.author}</span>
        <span aria-hidden="true"> · </span>
        <time>{source.date}</time>
      </p>
      <p className={styles.annotation}>{source.annotation}</p>
      <ExternalLink href={source.url}>Open source</ExternalLink>
    </article>
  );
}
