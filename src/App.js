import { useState } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import Dropdown from './Components/Elements/Dropdown/Dropdown';

// App component
const App = () => {
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true
    },
    {
      id: 2,
      title: "Top Images",
      active: false
    },
    {
      id: 3,
      title: "Fantesy Images",
      active: false
    }
  ]

  return (
    <>
        <Header />
        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
          <ContainerCard>
              <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                <h1>All images</h1>
                <Dropdown title="All Images" items={ddItems} />
              </div>
              <MasonryLayout />
          </ContainerCard>
        </div>
    </>
  )
}

export default App