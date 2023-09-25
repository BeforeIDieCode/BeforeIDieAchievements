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
            class="button"
            href="https://github.com/BeforeIDieCode/"
            target="/black"
          >
            GitHub Repo
          </a>
        </div>
      </div>
      <div className={"animation__container flex justify-content-center"}>
        <div className={"untitled"}>
          <div class="untitled__slides">
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>
                  plant seeds🌱<br></br>of inspiration{" "}
                </span>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>
                  to codify 💻<br></br> your purpose{" "}
                </span>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>
                  to compile your<br></br> bucket 🪣<br></br> list
                </span>
              </div>
            </div>

            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>to learn how to contribute 📚</span>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>
                  to learn <br></br>new skills🎯
                </span>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent">
                <span>
                  to advance <br></br>your career💼
                </span>
              </div>
            </div>
            <div class="untitled__slide">
              <div class="untitled__slideBg"></div>
              <div class="untitled__slideContent"></div>
            </div>
          </div>
          <div class="untitled__shutters"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
