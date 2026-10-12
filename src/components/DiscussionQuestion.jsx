import styles from './DiscussionQuestion.module.css';

export default function DiscussionQuestion({ number, question, children }) {
  return (
    <details className={styles.item}>
      <summary>
        <span className={styles.num}>Question {number}</span>
        <span className={styles.question}>{question}</span>
      </summary>
      {children ? <div className={styles.panel}>{children}</div> : null}
    </details>
  );
}
