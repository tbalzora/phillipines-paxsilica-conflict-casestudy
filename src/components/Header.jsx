import { useEffect, useId, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { siteMeta } from '../data/caseStudy';
import BrandMark from './BrandMark';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const links = [
  { to: '/', label: 'The Case', end: true },
  { to: '/technology', label: 'The Technology' },
  { to: '/conflict', label: 'Conflict & Voices' },
  { to: '/concepts', label: 'Concepts & Evidence' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <BrandMark size={32} />
          <span className={styles.brandText}>
            <span className={styles.brandTitle}>{siteMeta.brand}</span>
            <span className={styles.brandSub}>
              Challenging acquisition · Protecting technological sovereignty
            </span>
          </span>
        </NavLink>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.menuIcon}>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.menuIcon}>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>

        <nav
          id={menuId}
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Primary"
        >
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
