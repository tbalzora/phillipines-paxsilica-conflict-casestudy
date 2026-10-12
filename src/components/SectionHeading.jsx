import styles from './SectionHeading.module.css';

export default function SectionHeading({ id, eyebrow, title, children }) {
  return (
    <div className={styles.wrap} id={id}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {children ? <p className={styles.lede}>{children}</p> : null}
    </div>
  );
}
