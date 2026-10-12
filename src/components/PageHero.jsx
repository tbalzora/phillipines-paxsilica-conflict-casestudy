import styles from './PageHero.module.css';

export default function PageHero({ kicker, title, subtitle, children }) {
  return (
    <header className={styles.hero}>
      {kicker ? <p className={styles.kicker}>{kicker}</p> : null}
      <h1 className={styles.title}>{title}</h1>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      {children}
    </header>
  );
}
