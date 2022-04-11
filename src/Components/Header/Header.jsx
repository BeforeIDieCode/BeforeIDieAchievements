// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>
          <Nav />
          <BrickLayout />
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>Be one who change the world 😎🤘</h2>
            <h1 className={styles["heading-header-second-title"]}>
              Artists make The Arts better <br />
              The Arts design the <span>world</span> better
            </h1>
          </div>
        </ContainerCard>
    </header>
  )
}

export default Header