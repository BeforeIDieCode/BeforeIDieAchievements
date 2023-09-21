import React, { useState } from "react";
import styles from "./App.module.css";
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import images from "./Jsons/Contributors.json";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [categoryImage, setCategoryImage] = useState(images);

  const handleCategoryChange = (newCategory) => {
    setCategoryImage(images.filter((image) => image.category === newCategory));
  };

  return (
    <React.Fragment>
      <Header onCategoryChange={handleCategoryChange} />
      <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
        <ContainerCard>
          <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}></div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
