import styles from "./Nav.module.css";

import Button from "../Elements/Button/Button";

const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
      <img src="./img/Logo.gif" alt="Before I Die Logo" className="img-fluid" />

      <div className={styles["navbar-buttons"]}>
        <Button theme="matrix">
          <a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements" style={{ color: 'black' }} target="_blank">GitHub</a>
        </Button>
      </div>

    </nav>
  );
}

export default Nav
