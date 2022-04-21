import { useState } from "react"

// import styles of this component
import styles from "./Dropdown.module.css"

// import other react pkg to use
import { ArrowUp3 } from "iconsax-react"
import { PropTypes } from 'prop-types';

// import other component to use
import Button from "../Button/Button"

// Dropdown Component
const Dropdown = ({ items, title, liftingDdTextUp }) => {
  const [ ddTitle, setDdTitle ] = useState(title)
  const [ddItemsState, setDdItem] = useState(items)

  const ddItem = (ddId, ev) => {
    const ddTitle = ev.target.innerHTML
    activeDropDownItem(ddId)
    setDdTitle(ddTitle)
    liftingDdTextUp && liftingDdTextUp(ddTitle)
  }
    
  const activeDropDownItem = (dropdownItemId) => {
    setDdItem(prev => {
      prev.forEach(item => item.active = false)
      const myDd = prev.find(ddId => ddId.id === dropdownItemId)
      myDd.active = true
      return [ ...prev ]
    })
  }

  return (
    <div className={styles["dropdown"]}>
      <Button theme="transparent" className="flex align-items-center">
        { ddTitle }
        <span className={styles["dropdown-arrow-icon"]}>
          <ArrowUp3 color="var(--green-400)" />
        </span>
      </Button>
      <ul className={styles["dropdown-menu"]}>
        {ddItemsState.map(item => (
          <li 
            key={item.id}
            className={`${styles["dropdown-item-menu"]} ${item.active && styles.active}`}
            onClick={(ev) => ddItem(item.id, ev)}>
              { item.title }
          </li>
        ))}
      </ul>
    </div>
  )
}

// validate dropdown component props
Dropdown.propTypes  = {
  items: PropTypes.array,
  title: PropTypes.string,
  liftingDdTextUp: PropTypes.func
}

export default Dropdown