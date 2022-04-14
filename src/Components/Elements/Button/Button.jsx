// import styles of this component
import styles from "./Button.module.css"

// import react package
import PropTypes from 'prop-types'

// Button component
const Button = ({ children, theme, onClick }) => (
    <button 
        className={`${styles.button} ${styles[theme]}`}
        onClick={onClick}
    >
        {children}
    </button>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button