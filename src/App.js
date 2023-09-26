import React, { useState } from "react";
import Header from "./Components/Header/Header";
import MasonryLayout from "./Components/MasonryLayout/MasonryLayout";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import Contributors from "./Jsons/Contributors.json";
import Footer from "./Components/Footer/Footer";
import RandomContributors from "./Components/randomcontributor/RandomContributors";

const App = () => {
  return (
    <React.Fragment>
      <RandomContributors />
      <Header />
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
