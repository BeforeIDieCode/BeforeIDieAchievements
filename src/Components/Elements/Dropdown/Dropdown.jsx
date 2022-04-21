import { useState } from "react"

// import styles of this component
import styles from "./Dropdown.module.css"

// import other react pkg to use
import { ArrowUp3 } from "iconsax-react"

// import other component to use
import Button from "../Button/Button"


// Dropdown Component
const Dropdown = ({ items, title }) => {
  const [ ddTitle, setDdTitle ] = useState(title)
  const [ddItemsState, setDdItem] = useState(items)

  const ddItem = (ddId, ev) => {
    activeDropDownItem(ddId)
    setDdTitle(ev.target.innerHTML)
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
        <ArrowUp3 color="var(--green-400)" />
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

export default Dropdown