import styles from "./ContainerCard.module.css"

const ContainerCard = ({ children, className }) => (
    <div className={`${styles.container} ${className}`}>{ children }</div>
)

export default ContainerCard