import React, { useState, useEffect } from "react";
// import styles of this component
import "./Header.scss";
// import other components
// import ContainerCard from "../ContainerCard/ContainerCard";
// import Nav from "../Nav/Nav";
// import BrickLayout from "../BrickLayout/BrickLayout";
// import { Typewriter } from "react-simple-typewriter";
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import { Typewriter } from 'react-simple-typewriter'
import RandomContributors from "../randomcontributor/RandomContributors";


// Header component
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth > 640);

  useEffect(() => {
    function handleSize() {
      setIsMobile(window.innerWidth > 640);
    }
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return (
    <header className={`flex`}>
      <div className="text__container">
        <div className="opensource__title">
          <span>
            An Open<br></br> Source<br></br> Project
          </span>
        </div>

        <div className="github__section">
          <div>
            <span>
              {" "}
              Join us and <br></br>share your wish
            </span>
          </div>
          <a
            className="button"
            href="https://github.com/BeforeIDieCode/BeforeIDieAchievements"
            target="/black"
          >
            GitHub Repo
          </a>
        </div>
      </div>
      <div className={"animation__container flex justify-content-center"}>
        <div className={"untitled"}>
          <div className="untitled__slides">
            <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent">
                <span>
                  Plant seeds🌱<br></br>of inspiration{" "}
                </span>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent">
                <span>
                  To codify 💻<br></br> your purpose{" "}
                </span>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent">
                <span>
                  To compile your<br></br> bucket 🪣 list
                </span>
              </div>
            </div>

            <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent">
                <span>To learn how to contribute 📚
                </span>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent">
                <span>
                  To learn <br></br>new skills 🎯
                </span>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent">
                <span>
                  To advance <br></br>your career 💼
                </span>
              </div>
            </div>
            <div className="untitled__slide">
              <div className="untitled__slideBg"></div>
              <div className="untitled__slideContent"></div>
            </div>
          </div>
          <div className="untitled__shutters"></div>
        </div>
      </div>
    </header>

  );
};

export default Header;
