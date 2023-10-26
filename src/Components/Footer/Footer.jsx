import React, { useState, useEffect } from "react";
import heartBeat from "./heart-beat.wav";
import typingSound from "./typing-sound.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const heartAudio = new Audio(heartBeat);
  const typingAudio = new Audio(typingSound);
  useEffect(() => {
    function handleSize() {
      setIsMobile(window.innerWidth < 640);
    }
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const playHeartbeat = () => {
    heartAudio.play();
  };
  const stopHeartbeat = () => {
    if (heartAudio) {
      heartAudio.pause();
    }
  };
  const playTypingSound = () => {
    typingAudio.play();
  };
  const stopTypingSound = () => {
    if (typingAudio) {
      typingAudio.pause();
    }
  };
  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-message"]}>
        <span
          onMouseEnter={playTypingSound}
          onMouseLeave={stopTypingSound}
        >
          <FontAwesomeIcon
            icon={faCode}
            style={{ color: "#feea3a" }}
          />
        </span>{" "}
        with{" "}
        <span
          className={styles["emoji"]}
          role="img"
          aria-label="heart"
          onMouseEnter={playHeartbeat}
          onMouseLeave={stopHeartbeat}
        >
          💙
        </span>{" "}
        {isMobile && <br />}
        by the{" "}
        <a
          className={styles["footer-message-link"]}
          href="https://github.com/BeforeIDieCode"
        >
          Before I Die Community
        </a>
      </p>
    </footer>
  );
};

export default Footer;
