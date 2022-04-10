import styles from "./ContainerCard.module.css"

const ContainerCard = ({ children }) => <div className={styles.container}>{ children }</div>

export default ContainerCard