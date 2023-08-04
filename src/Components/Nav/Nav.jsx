import styles from "./Nav.module.css"

import Button from "../Elements/Button/Button"


const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center`}>
        <img src="./img/Logo.gif" alt="Before I Die Logo" className="img-fluid" />
        <div className={`flex ${styles["navbar-buttons"]}`}>
            <Button theme="matrix">GitHub</Button>
        </div>
        <div className={styles["navbar-responsive-menu"]}>
        </div>
    </nav>
  )
}

export default Nav
