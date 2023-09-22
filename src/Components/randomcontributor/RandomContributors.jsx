import React, { useState, useEffect } from "react";
import contributorsData from "../../Jsons/Contributors.json";
import styles from "./RandomContributor.module.css";
const RandomContributors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * contributorsData.length);
    setCurrentIndex(randomIndex);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contributorsData.length);
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentUser = contributorsData[currentIndex];
  // console.log(currentUser);
  return (
    <div className={styles["card-container"]}>
      <h1 className={styles.heading}>Thanks for contributions!</h1>
      <a href={`${currentUser.GitHub}`}>
        <div className={styles.cards}>
          <img
            src={currentUser.avatar}
            className={styles.image}
            alt={`${currentUser.name}'s avatar`}
          />
          <p className={styles.name}>{currentUser.name}</p>
        </div>
      </a>
    </div>
  );
};

export default RandomContributors;
