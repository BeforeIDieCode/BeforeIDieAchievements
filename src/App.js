// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import Dropdown from './Components/Elements/Dropdown/Dropdown';

// import json files 
import images from "./Jsons/Images.json"

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
      title: "Nature Images",
      active: false
    },
    {
      id: 4,
      title: "NFT Images",
      active: false
    },
    {
      id: 5,
      title: "Space Images",
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
              <MasonryLayout images={images.all_images} />
          </ContainerCard>
        </div>
    </>
  )
}

export default App