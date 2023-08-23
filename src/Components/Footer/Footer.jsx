import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-message"]}>
        Made with{" "}
        <span className={styles["emoji"]} role='img' aria-label='heart'>
          💙
        </span>{" "}
        by the{" "}
        <a
          className={styles["footer-message-link"]}
          href='https://github.com/BeforeIDieCode/BeforeIDieAchievements.git'>
          Before I Die Community
        </a>
      </p>
    </footer>
  );
};

export default Footer;
