import React, {useState, useEffect} from "react";
// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import { Typewriter } from 'react-simple-typewriter'




// Header component
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 640)

  useEffect(() => {
    function handleSize() {
      setIsMobile(window.innerWidth > 640);
    }
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    }
  }, [])
  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>
        <Nav />
        {isMobile && <BrickLayout />}
        <div className={styles["blur-circle-shape-two"]}></div>
        <div className={`${styles["headings-header"]} flex justify-content-center flex-column`}>
          <h1 className={styles["heading-header-second-title"]}>
            <p className={styles["text_open-source-project"]} >
              <span
                className={styles["span_open-source-project"]}
                style={{ color: "#006dff"}}
              >
                An Open
                <br />
                <br />
                Source
                <br />
                <br />
                Project
              </span>{" "}
              <br />
              <br />
              <span style={{ color: '#006DFF', fontWeight: 'bold' }}>
                <Typewriter
                  words={[
                    'to plant seeds 🌱 of inspiration.',
                    'to codify 💻 your purpose.',
                    'to compile your bucket 🪣 list.',
                    'to learn how to contribute 📚.'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </p>
          </h1>
        </div>
      </ContainerCard>
    </header>
  );
}

export default Header;
