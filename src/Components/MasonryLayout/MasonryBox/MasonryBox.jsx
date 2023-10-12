import React, { useState, useEffect } from "react";
import styles from "./MasonryBox.module.css";
import { PropTypes } from "prop-types";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import languages from "../../../translation/languages.json";
import LocationMap from "../../LocationMap/LocationMap";
import Modal from "../../../UI/Modal";

const MasonryBox = ({
  wallSrc,
  userProf,
  userName,
  userLocation,
  githubUrl,
  userText,
  ipObj
}) => {
  const [randomColor, setRandomColor] = useState();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isUserTextVisible, setIsUserTextVisible] = useState(true);
  const { t } = useTranslation();

  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
    setIsUserTextVisible(!isUserTextVisible);
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

  const RTL_LANGUAGES = ["ar", "he", "az", "dv", "ku", "fa", "ur"];
  const BIDText = (
    <span className={styles.boldText}>
      <div className={styles["bid-text"]}>
       {RTL_LANGUAGES.includes(languages[ipObj.ipInfo?.country_code])
          ? `...${t("BEFORE-I-DIE")}`
          : `${t("BEFORE-I-DIE")}...`}
      </div>
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
      {isEnlarged &&
        <Modal onClose={toggleEnlarged}>
          <div className={styles.enlargedCardContainer}>
            <img src={wallSrc} alt="" className={styles.enlargedCardImage} />
            <div className={styles.enlargedCardText} style={userText.length <= 50 ? { width: "100%" } : null}>
              <h3>{BIDText}</h3>
              <div style={{ position: "relative" }}>
                <p style={{ color: randomColor }}>{userText}</p>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "row",
                margin: "10px",
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: "15px"
              }}>
                <div className={styles["masonry-card-user-prof"]}>
                  <a href={githubUrl ? githubUrl : ''} target="_blank" rel="noopener noreferrer">
                    <img src={userProf} alt="" className={styles["clickable"]} />
                  </a>
                </div>
                <div className={`${styles["masonry-card-user-prof-desc"]} flex flex-column`}>
                  <h1>{userName}</h1>
                  <h3>{userLocation}</h3>
                </div>
              </div>
              <div className={styles["enlargedCardMap"]}>
                <LocationMap userLocation={userLocation} />
              </div>
            </div>
          </div>
        </Modal>
      }
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
              <h3>{userLocation}</h3>
            </div>
          </div>
        </div>
      )}
    </div >
  )
};

MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userProf: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  userText: PropTypes.string,
};

export default MasonryBox;
