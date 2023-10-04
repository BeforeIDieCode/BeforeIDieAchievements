import React from 'react';
import styles from './ContributorsGrid.module.css';
import {shuffleArray} from '../../utils/shuffle'

const getDifferentColors = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r},${g},${b},0.8)`;
};

const ContributorsGrid = ({ contributors }) => {

  let randomContributors = contributors
  shuffleArray(randomContributors)
  
  return (
    <div>
    <h1 className={styles["contributor-title"]} style={{color:`${getDifferentColors()}`}}>Contributors</h1>
    <div className={styles["contributor-grid"]}>
      {randomContributors.map(contributor => (
        <a key={contributor.id} href={contributor.GitHub} target="_blank" className={styles["contributor-card"]} style={{ boxShadow: `inset 0 0 10px ${getDifferentColors()}, inset 0 0 20px ${getDifferentColors()}`} }>
          <div>
            <img src={contributor.avatar} alt={contributor.name} />
            <p>{contributor.name}</p>
          </div>
        </a>
      ))}
    </div>
    </div>
  );
};

export default ContributorsGrid;