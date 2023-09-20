import React, { useState, useEffect } from "react";
// import styles of this component
import "./Header.scss";

// import other components
import ContainerCard from "../ContainerCard/ContainerCard";
import Nav from "../Nav/Nav";
import BrickLayout from "../BrickLayout/BrickLayout";
import { Typewriter } from "react-simple-typewriter";

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
    <header className={` flex justify-content-center`}>
      <div className={"untitled"}>
        <div class="untitled__slides">
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent">
              <span>Before I die.... </span>
            </div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent">
              <span>It is an </span>
              <span>Open Source </span>
              <span>Project</span>
            </div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent">
              <span>Join Us</span>
              <span>And Share</span>
              <span>Your Wish</span>
            </div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent">
              <a
                class="button"
                href="https://github.com/BeforeIDieCode/"
                target="/black"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent"></div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent"></div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent"></div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent"></div>
          </div>
          <div class="untitled__slide">
            <div class="untitled__slideBg"></div>
            <div class="untitled__slideContent"></div>
          </div>
        </div>
        <div class="untitled__shutters"></div>
      </div>
    </header>
  );
};

export default Header;
