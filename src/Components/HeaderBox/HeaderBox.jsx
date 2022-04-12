// import styles this component
import styles from "./HeaderBox.module.css"

const HeaderBox = ({ number, title, border_right=true }) => (
    <div className={`${styles["header-box"]} ${border_right && styles["active-border-right"]} flex flex-column`}>
        <h1>{ number }</h1>
        <h3>{ title }</h3>
    </div>
)

export default HeaderBox