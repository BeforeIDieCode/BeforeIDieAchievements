import React, { useState, useEffect } from "react";
// import styles of this component
import "./Header.scss";
// import other components
// import ContainerCard from "../ContainerCard/ContainerCard";
// import Nav from "../Nav/Nav";
// import BrickLayout from "../BrickLayout/BrickLayout";
// import { Typewriter } from "react-simple-typewriter";
import ContainerCard from "../ContainerCard/ContainerCard";
import Nav from "../Nav/Nav";
import BrickLayout from "../BrickLayout/BrickLayout";
import { Typewriter } from "react-simple-typewriter";
import RandomContributors from "../randomcontributor/RandomContributors";

// Header component
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 900);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header flex ${menuOpen ? 'menu-open' : ''}`}>
      {isMobile ? (
        <>
          <div className="navbar">
            <div className="opensource__title">
              <span>
                An Open Source Project
              </span>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`bar ${menuOpen ? "open" : ""}`}></div>
              <div className={`bar ${menuOpen ? "open" : ""}`}></div>
              <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            </div>
            {menuOpen && (
              <div className="menu">
                <a href="https://github.com/BeforeIDieCode/BeforeIDieAchievements" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                <a href="https://before-i-die-achievements.vercel.app/Contributors" target="_blank" rel="noopener noreferrer">Contributors List</a>
                <a href="https://before-i-die-achievements.vercel.app/contributors-map" target="_blank" rel="noopener noreferrer">Contributors Map</a>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="text__container">
          <div className="opensource__title">
            <span>
              An Open<br></br> Source<br></br> Project
            </span>
          </div>

          <div className="github__section">
            <span>Join us and <br></br>share your wish</span>
            <a
              className="button"
              href="https://github.com/BeforeIDieCode/BeforeIDieAchievements"
              target="/black"
            >
              GitHub Repo
            </a>
            <a
              className="button"
              href="https://before-i-die-achievements.vercel.app/Contributors"
              target="/black"
            >
              Contributors List
            </a>
            <a
              className="button"
              href="https://before-i-die-achievements.vercel.app/contributors-map"
              target="/black"
            >
              Contributors Map
            </a>
          </div>
        </div>
      )}
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
                <span>To learn how to contribute 📚</span>
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