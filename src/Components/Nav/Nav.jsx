// Nav.jsx

import styles from './Nav.module.css';
import Button from '../Elements/Button/Button';

const Nav = () => {

  return (
    <nav className={`${styles.nav} flex align-items-center`}>

      <img
        src="./img/Logo.gif"
        alt="Before I Die Logo"
        className={styles.imgfluid}
      />

      <div className={styles['navbar-buttons']}>

        <Button theme="matrix">

          <a
            href="https://github.com/BeforeIDieCode/BeforeIDieAchievements"
            className={styles['github-link']}
            target="_blank"
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
