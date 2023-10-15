import React, { useEffect, useState } from "react";
import contributorsData from "../../Jsons/Contributors.json";
import styles from "./RandomContributor.module.css";

const RandomContributors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pickRandomContributor = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * contributorsData.length);
    } while (randomIndex === currentIndex);
    return randomIndex;
  };

 useEffect(() => {
  
  setTimeout(() => {
    setCurrentIndex(pickRandomContributor())
  }, 5000);
 }, [currentIndex]);

  const currentUser = contributorsData[currentIndex];

  return (
    <>
 
      <div
        className={`${styles["card-container"]}  ` }
        style={
            { display : "flex"  , opacity : 1 ,marginTop : "2rem",  transition:' all 0.3s ease-in-out'  }
        }
      >
        <h1 className={styles.heading}>Thanking Our Before I Die Contributors</h1>
        <a href={`${currentUser.GitHub}`}>
          <div className={`${styles.cards} `}>
            <img
              src={currentUser.avatar}
              className={styles.image}
              alt={`${currentUser.name}'s avatar`}
            />
            <p className={styles.name}>{currentUser.name}</p>
          </div>
        </a>
      </div>
      
    </>
  );
};

export default RandomContributors;
