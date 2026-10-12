import { getSourceById } from '../data/sources';
import ExternalLink from './ExternalLink';
import styles from './DocumentCard.module.css';

export default function DocumentCard({ sourceId }) {
  const source = getSourceById(sourceId);
  if (!source) return null;

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{source.title}</h3>
      <p className={styles.meta}>
        {source.author} · {source.date}
      </p>
      <p className={styles.annotation}>{source.annotation}</p>
      <ExternalLink href={source.url}>View document</ExternalLink>
    </article>
  );
}
