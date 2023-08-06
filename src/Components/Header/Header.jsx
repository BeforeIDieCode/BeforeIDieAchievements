// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";
import { Typewriter } from 'react-simple-typewriter'




// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>

        <Nav />
        <BrickLayout />

        <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>

          <h1 className={styles["heading-header-second-title"]}>
            <span style={{ color: 'blue', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      </ContainerCard>
    </header>
  )
}

export default Header
