import React, { useState, useEffect } from "react";
import useSound from 'use-sound';
import heartBeat from './heart-beat.wav';

import styles from "./Footer.module.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [playHeartBeat, { stop }] = useSound(heartBeat);

  useEffect(() => {
    function handleSize() {
      setIsMobile(window.innerWidth < 640);
    }
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    }
  }, [])

  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-message"]}>
        Made with{" "}
        <span
          className={styles["emoji"]}
          role='img'
          aria-label='heart'
          onMouseEnter={playHeartBeat}
          onMouseLeave={() => stop()}
        >
          💙
        </span>{" "}
        {isMobile && <br />}
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
