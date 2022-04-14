import styles from "./Button.module.css"

const Button = ({ children, theme, onClick }) => (
    <button 
        className={`${styles.button} ${styles[theme]}`}
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button