import styles from './BrandMark.module.css';

const FLAG_ALT =
  'National flag of the Philippines: a white triangle with a golden sun and three stars beside blue and red horizontal bands';

export default function BrandMark({ size = 40, className = '' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}philippines-flag.png`}
      alt={FLAG_ALT}
      width={Math.round(size * 1.6)}
      height={size}
      className={`${styles.flag} ${className}`.trim()}
      decoding="async"
    />
  );
}
