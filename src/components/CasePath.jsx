import { Link } from 'react-router-dom';
import styles from './CasePath.module.css';

export default function CasePath({ back, next }) {
  return (
    <nav className={styles.path} aria-label="Continue through the case">
      {back ? (
        <Link className={styles.back} to={back.to}>
          <span aria-hidden="true">←</span>
          {back.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link className={styles.next} to={next.to}>
          {next.label}
          <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </nav>
  );
}
