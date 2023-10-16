import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import Contributors from "./Jsons/Contributors.json";
import Footer from "./Components/Footer/Footer";
import RandomContributors from "./Components/randomcontributor/RandomContributors";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTopBtn = () => {
    return (
      <div
        onClick={handleScrollToTop}
        className={showButton ? "scroll-to-top-btn" : "hideBtn"}
      >
        <p className="scroll-to-top-arrow">^</p>
      </div>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setShowButton((prev) =>
        currentPosition < 1000 ? (prev = false) : (prev = true)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      {scrollToTopBtn()}
      <Header />
      <RandomContributors />
      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      >
        <ContainerCard>
          <MasonryLayout users={Contributors} />
        </ContainerCard>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
