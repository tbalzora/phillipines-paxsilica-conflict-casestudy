import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      aria-label={`Switch to ${next} mode`}
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M12 3a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 14.6a1 1 0 0 1 1 1V20a1 1 0 1 1-2 0v-1.4a1 1 0 0 1 1-1ZM4 11a1 1 0 1 0 0 2h1.4a1 1 0 1 0 0-2H4Zm14.6 0a1 1 0 1 0 0 2H20a1 1 0 1 0 0-2h-1.4ZM6.3 5.6a1 1 0 0 1 1.4 0l.9.9a1 1 0 1 1-1.4 1.4l-.9-.9a1 1 0 0 1 0-1.4Zm9.1 9.1a1 1 0 0 1 1.4 0l.9.9a1 1 0 0 1-1.4 1.4l-.9-.9a1 1 0 0 1 0-1.4ZM17.7 5.6a1 1 0 0 1 0 1.4l-.9.9a1 1 0 1 1-1.4-1.4l.9-.9a1 1 0 0 1 1.4 0ZM8.6 14.7a1 1 0 0 1 0 1.4l-.9.9a1 1 0 1 1-1.4-1.4l.9-.9a1 1 0 0 1 1.4 0ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
          <path
            fill="currentColor"
            d="M14.2 3.2a1 1 0 0 1 .2 1.1A7.2 7.2 0 1 0 19.7 14a1 1 0 0 1 1.3 1.2A9.2 9.2 0 1 1 13 2.9a1 1 0 0 1 1.2.3Z"
          />
        </svg>
      )}
    </button>
  );
}
