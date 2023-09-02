import React, { useState, useEffect } from "react";
import styles from "./MasonryBox.module.css";
import { PropTypes } from "prop-types";

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
  const [randomColor, setRandomColor] = useState();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [isUserTextVisible, setIsUserTextVisible] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);

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
      const color = `#${red.toString(16)}${green.toString(16)}${blue.toString(
        16
      )}`;

      return color;
    });
  }, [isEnlarged]);
  const presetText = (
    <span className={styles.boldText}>
      Before I Die... <br />
      {/* 💭 🌎 🎨 🎓 ❤️ 🌲 🏠 ✈️ 🏆 <br /> 💵 🤝 🌃 📚 🎸 🚴 🌟 🏰 🚀 */}
      <br />
    </span>
  );

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
          <div className={styles.enlargedPhotoContainer}>
            <img
              src={wallSrc}
              alt=""
              className={styles.enlargedPhotoImage}
            />
            <div
              className={styles.enlargedPhotoText}
              onClick={toggleText}
            >
              <h3>{presetText}</h3>
              <p style={{ color: randomColor }}>{userText}</p>
            </div>{" "}
          </div>

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
