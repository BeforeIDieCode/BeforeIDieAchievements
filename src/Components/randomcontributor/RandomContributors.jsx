import React, { useState, useEffect } from "react";
import contributorsData from "../../Jsons/Contributors.json";
import styles from "./RandomContributor.module.css";
const RandomContributors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const handleIsShown = () => {
    setIsShown((prev) => !prev);
  };

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
    <>
      <div
        className={styles["card-container"]}
        style={
          isShown
            ? { marginTop: "1rem" }
            : { marginTop: "-12.3rem", marginBottom: "0" }
        }
      >
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
      <div
        className={styles.hide}
        onClick={handleIsShown}
        style={
          isShown ? { margin: "-1rem 2rem 0 0" } : { margin: ".2rem 2rem 0 0" }
        }
      >
        {isShown ? "Hide" : "Show"}
      </div>
    </>
  );
};

export default RandomContributors;
