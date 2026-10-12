import { siteMeta } from '../data/caseStudy';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>{siteMeta.courseNote}</p>
        <p className={styles.updated}>Updated {siteMeta.lastUpdated}</p>
      </div>
    </footer>
  );
}
