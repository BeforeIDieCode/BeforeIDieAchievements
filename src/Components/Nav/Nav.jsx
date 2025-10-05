// Nav.jsx

import styles from './Nav.module.css';
import Button from '../Elements/Button/Button';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/Contributors', label: 'Contributors' },
    { path: '/contributors-map', label: 'Map' }
  ];

  return (
    <nav className={`${styles.nav} flex align-items-center`}>

      <Link to="/" className={styles['logo-link']}>
        <img
          src="./img/Logo.gif"
          alt="Before I Die Logo"
          className={styles.imgfluid}
        />
      </Link>

      <div className={`${styles['navbar-nav']} flex align-items-center`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles['nav-item']} ${
              location.pathname === item.path ? styles.active : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className={styles['navbar-buttons']}>

        <Button theme="matrix">

          <a
            href="https://github.com/BeforeIDieCode/BeforeIDieAchievements"
            className={styles['github-link']}
            target="_blank"
            rel="noopener noreferrer"
          >

            <img
              src="./img/GitHub Logo.png"
              alt="GitHub Logo"
              className={styles['github-logo']}
              style={{ width: '40px', height: '40px' }}
            />

            GitHub

          </a>

        </Button>

      </div>

    </nav>
  );

};

export default Nav;
