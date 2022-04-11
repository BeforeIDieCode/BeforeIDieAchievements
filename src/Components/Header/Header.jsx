// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from './../../ContainerCard/ContainerCard';
import Nav from "../../Nav/Nav"
import BrickLayout from "../../BrickLayout/BrickLayout";

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>
          <Nav />
          <BrickLayout />
        </ContainerCard>
    </header>
  )
}

export default Header