import styles from './ConceptCard.module.css';

export default function ConceptCard({ title, children }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>{children}</div>
    </article>
  );
}
