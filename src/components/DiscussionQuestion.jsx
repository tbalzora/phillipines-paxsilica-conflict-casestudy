import styles from './DiscussionQuestion.module.css';

export default function DiscussionQuestion({ number, question, guide }) {
  return (
    <article className={styles.item}>
      <p className={styles.num}>Question {number}</p>
      <p className={styles.question}>{question}</p>
      {guide ? <p className={styles.guide}>{guide}</p> : null}
    </article>
  );
}
