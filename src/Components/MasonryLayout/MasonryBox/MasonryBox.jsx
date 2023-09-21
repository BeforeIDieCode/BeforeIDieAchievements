import React, { useState, useEffect } from "react";
import styles from "./MasonryBox.module.css";
import { PropTypes } from "prop-types";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import languages from "../../../translation/languages.json";


const MasonryBox = ({
  wallSrc,
  userProf,
  userName,
  userJob,
  githubUrl,
  userText,
  ipObj
}) => {

  const [randomColor, setRandomColor] = useState();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isUserTextVisible, setIsUserTextVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const { t } = useTranslation();

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
    setIsUserTextVisible(!isUserTextVisible);
  };

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  useEffect(() => {
    setRandomColor(() => {
      const minBrightness = 80;

      // Generate random RGB values with a minimum brightness
      let red, green, blue;
      do {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);
      } while (red + green + blue < minBrightness * 3);

      // Convert RGB values to a hexadecimal color
      const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

      return color;
    });
  }, [isEnlarged]);

  const presetText = (
    <span className={styles.boldText}>
      {languages[ipObj.ipInfo?.country_code] === "ar" ?
        <div> ...{t("BEFORE-I-DIE")}  </div> :
        <div> {t("BEFORE-I-DIE")}... </div>
      }
      <br />
    </span>
  );

  useEffect(() => {
    // Change the language when the component mounts based on ipInfo
    i18next.changeLanguage(languages[ipObj.ipInfo?.country_code]);
  }, [ipObj.loading]);

  return (
    <div className={styles["masonry-card"]}>
      <img src={wallSrc} style={{ width: "100%" }} alt="" onClick={toggleEnlarged} />
      {isEnlarged && (
        <div className={styles.enlargedPhoto} onClick={toggleEnlarged}>
          <div className={styles.enlargedPhotoContainer}>
            <img src={wallSrc} alt="" className={styles.enlargedPhotoImage} />
            <div
              className={styles.enlargedPhotoText}
              onClick={toggleText}
              // Adds 100% width if users text is 50 or less characters.
              style={userText.length <= 50 ? { width: "100%" } : null}
            >
              <h3>{presetText}</h3>
              <div style={{ position: "relative" }}>
                <p style={{ color: randomColor }}>{userText}</p>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "10px",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                gap: "15px"
              }}>
                <div className={styles["masonry-card-user-prof"]}>
                  <a href={githubUrl ? githubUrl : ''} target="_blank" rel="noopener noreferrer">
                    <img src={userProf} alt="" className={styles["clickable"]} />
                  </a>
                </div>
                <div className={`${styles["masonry-card-user-prof-desc"]} flex flex-column`}>
                  <h1>{userName}</h1>
                  <h3>{userJob}</h3>
                </div>
              </div>
            </div>
          </div>
          {isTextVisible && (
            <div className={styles.enlargedPhotoTextBox}>
              <p>{presetText} {userText}</p>
            </div>
          )}
        </div>
      )}
      {isUserTextVisible && (
        <div className={`${styles["masonry-card-description"]} flex`}>
          <div className={`${styles["masonry-card-user-box"]} flex align-items-center`}>
            <div className={styles["masonry-card-user-prof"]}>
              <a href={githubUrl ? githubUrl : ''} target="_blank" rel="noopener noreferrer">
                <img src={userProf} alt="" className={styles["clickable"]} />
              </a>
            </div>
            <div className={`${styles["masonry-card-user-prof-desc"]} flex flex-column`}>
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
