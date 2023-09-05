import React, { useState, useEffect } from "react";
import styles from "./MasonryBox.module.css";
import { PropTypes } from "prop-types";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import languages from "../../../translation/languages.json";
import useIPInfo from "../../../hooks/useIPInfo";

const MasonryBox = ({
  wallSrc,
  userProf,
  userName,
  userJob,
  githubUrl,
  userText,
}) => {
  const handleUserProfClick = () => {
    if (githubUrl) {
      window.open(githubUrl, "_blank");
    }
  };

  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isUserTextVisible, setIsUserTextVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const { ipInfo, loading, error } = useIPInfo();
  const { t } = useTranslation();
  const toggleEnlarged = () => {
    setIsEnlarged(!isEnlarged);
    setIsUserTextVisible(!isUserTextVisible);
  };

  const toggleText = () => {
    setIsTextVisible(!isTextVisible);
  };
  console.log(ipInfo);
  const presetText = (
    <span className={styles.boldText}>
      {t("BEFORE-I-DIE")}... <br />
      💭 🌎 🎨 🎓 ❤️ 🌲 🏠 ✈️ 🏆 <br /> 💵 🤝 🌃 📚 🎸 🚴 🌟 🏰 🚀
      <br />
    </span>
  );
  useEffect(() => {
    // Change the language when the component mounts based on ipInfo
    i18next.changeLanguage(languages[ipInfo?.country_code]);
  }, [ipInfo]); // Empty dependency array to run this effect only once when the component mounts

  return (
    <div className={styles["my-masonry"]}>
      <img
        src={wallSrc}
        style={{ width: "100%" }}
        alt=""
        onClick={toggleEnlarged}
      />
      {isEnlarged && (
        <div
          className={styles.enlargedPhoto}
          onClick={toggleEnlarged}
        >
          <img
            src={wallSrc}
            alt=""
            className={styles.enlargedPhotoImage}
          />
          <div
            className={styles.enlargedPhotoText}
            onClick={toggleText}
          >
            {presetText} {userText}
          </div>{" "}
          {/* Add preset text here */}
          {isTextVisible && (
            <div className={styles.enlargedPhotoTextBox}>
              <p>
                {presetText} {userText}
              </p>{" "}
              {/* Add preset text here */}
            </div>
          )}
        </div>
      )}
      {isUserTextVisible && (
        <div className={`${styles["my-masnry-description"]} flex`}>
          <div
            className={`${styles["my-masnry-user-box"]} flex align-items-center`}
          >
            <div className={styles["my-masnry-user-prof"]}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleUserProfClick}
              >
                <img
                  src={userProf}
                  alt=""
                  className={styles["clickable"]}
                />
              </a>
            </div>
            <div
              className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}
            >
              <h1>{userName}</h1> {/* Add preset text here */}
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
