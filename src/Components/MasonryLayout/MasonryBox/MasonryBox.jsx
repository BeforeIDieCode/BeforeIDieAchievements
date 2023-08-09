import React, { useState } from 'react';
import styles from './MasonryBox.module.css';
import { PropTypes } from 'prop-types';

const MasonryBox = ({ wallSrc, userProf, userName, userJob, githubUrl, userText }) => {
  const handleUserProfClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isUserTextVisible, setIsUserTextVisible] = useState(true);

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
    setIsUserTextVisible(!isEnlarged);
  };

  return (
    <div className={styles["my-masonry"]}>
      <img src={wallSrc} style={{ width: "100%" }} alt="" onClick={toggleEnlarged} />
      {isEnlarged && (
        <div className={styles.enlargedPhoto} onClick={toggleEnlarged}>
          <img src={wallSrc} alt="" className={styles.enlargedPhotoImage} />
          <div className={styles.enlargedPhotoText}>{userText}</div>
        </div>
      )}
      {isUserTextVisible && (
        <div className={`${styles["my-masnry-description"]} flex`}>
          <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
            <div className={styles["my-masnry-user-prof"]}>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={handleUserProfClick}>
                <img src={userProf} alt="" className={styles["clickable"]} />
              </a>
            </div>
            <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
              <h1>{userName}</h1>
              <h3>{userJob}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userProf: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  userText: PropTypes.string,
};

export default MasonryBox;
