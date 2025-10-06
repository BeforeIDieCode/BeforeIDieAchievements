import React, { useState, useEffect, useRef } from "react";
import heartBeat from "./heart-beat.wav";
import typingSound from "./typing-sound.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const heartAudioRef = useRef(null);
  const typingAudioRef = useRef(null);

  useEffect(() => {
    // create audio objects once
    heartAudioRef.current = new Audio(heartBeat);
    typingAudioRef.current = new Audio(typingSound);
    // make typing audio loop while hovered/focused and set comfortable volume
    typingAudioRef.current.loop = true;
    typingAudioRef.current.volume = 0.5;

    function handleSize() {
      setIsMobile(window.innerWidth < 640);
    }
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
      // cleanup audio
      if (heartAudioRef.current) {
        heartAudioRef.current.pause();
        heartAudioRef.current = null;
      }
      if (typingAudioRef.current) {
        typingAudioRef.current.pause();
        typingAudioRef.current = null;
      }
    };
  }, []);

  const playHeartbeat = () => {
    try {
      if (heartAudioRef.current) {
        heartAudioRef.current.currentTime = 0;
        heartAudioRef.current.volume = 0.9;
        void heartAudioRef.current.play();
      }
    } catch (e) {
      // ignore play errors
    }
  };
  const stopHeartbeat = () => {
    try {
      if (heartAudioRef.current) {
        heartAudioRef.current.pause();
        heartAudioRef.current.currentTime = 0;
      }
    } catch (e) {}
  };

  const playTypingSound = () => {
    try {
      if (typingAudioRef.current) {
        typingAudioRef.current.currentTime = 0;
        void typingAudioRef.current.play();
      }
    } catch (e) {}
  };
  const stopTypingSound = () => {
    try {
      if (typingAudioRef.current) {
        typingAudioRef.current.pause();
        typingAudioRef.current.currentTime = 0;
      }
    } catch (e) {}
  };

  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer-message"]}>
        <span
          className={styles.codeIcon}
          role="img"
          aria-label="Made"
          tabIndex={0}
          onMouseEnter={playTypingSound}
          onMouseLeave={stopTypingSound}
          onFocus={playTypingSound}
          onBlur={stopTypingSound}
        >
          Made
        </span>{" "}
        with{" "}
        <span
          className={styles["emoji"]}
          role="img"
          aria-label="heart"
          onMouseEnter={playHeartbeat}
          onMouseLeave={stopHeartbeat}
          onFocus={playHeartbeat}
          onBlur={stopHeartbeat}
          tabIndex={0}
        >
          💙
        </span>{" "}
        {isMobile && <br />}
        by the{" "}
        <a
          className={styles["footer-message-link"]}
          href="https://github.com/BeforeIDieCode"
          target="_blank"
          rel="noopener noreferrer"
        >
          Before I Die (GitHub org)
        </a>
      </p>
    </footer>
  );
};

export default Footer;
