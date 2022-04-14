// import styles this component
import styles from "./HeaderBox.module.css"

// import react package
import PropTypes from 'prop-types'

// HeaderBox component
const HeaderBox = ({ number, title, border_right=true }) => (
    <div className={`${styles["header-box"]} ${border_right && styles["active-border-right"]} flex flex-column`}>
        <h1>{`${number}k+`}</h1>
        <h3>{ title }</h3>
    </div>
)

HeaderBox.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    border_right: PropTypes.bool
}

export default HeaderBox