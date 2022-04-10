import styles from "./Header.module.css"

import ContainerCard from './../../ContainerCard/ContainerCard';
import Nav from "../../Nav/Nav"

const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard>
          <Nav />
        </ContainerCard>
    </header>
  )
}

export default Header