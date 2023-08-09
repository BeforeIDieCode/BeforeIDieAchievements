import { useState } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';

// import json file
import images from "./Jsons/Images.json"

// App component
const App = () => {
  const [categoryImage, setCategoryImage] = useState(images);

  return (
    <>
      <Header />
      <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
        <ContainerCard>
          <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}></div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>
      </div>
    </>
  );
}

export default App;
