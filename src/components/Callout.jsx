import styles from './Callout.module.css';

export default function Callout({ label = 'Key idea', children, large = false }) {
  return (
    <aside
      className={`${styles.callout} ${large ? styles.large : ''}`}
      aria-label={label}
    >
      {label ? <p className={styles.label}>{label}</p> : null}
      <div className={styles.body}>{children}</div>
    </aside>
  );
}
