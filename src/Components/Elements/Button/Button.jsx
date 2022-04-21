// import styles of this component
import styles from "./Button.module.css"

// import react package
import PropTypes from 'prop-types'

// Button component
const Button = ({ children, theme, onClick, className }) => (
    <button
        className={`${styles.button} ${styles[theme]} ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
)

Button.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default Button