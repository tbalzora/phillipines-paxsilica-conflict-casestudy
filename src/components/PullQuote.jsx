import styles from './PullQuote.module.css';

export default function PullQuote({ children, attribution }) {
  return (
    <blockquote className={styles.quote}>
      <p>{children}</p>
      {attribution ? <footer>{attribution}</footer> : null}
    </blockquote>
  );
}
