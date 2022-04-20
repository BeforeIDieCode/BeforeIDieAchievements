// import styles of this component
import styles from "./MasonryBox.module.css"

// MasonryBox component
const MasonryBox = () => {
  return (
    <div className={styles["my-masonry"]}>
        <img src="img/wallpapers/2.jfif" style={{ width: "100%" }} alt="" />
        <div className={`${styles["my-masnry-description"]} flex`}>
          <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
            <div className={styles["my-masnry-user-prof"]}>
              <img src="img/profile/1.jpg" alt="" />
            </div>
            <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
              <h1>arash</h1>
              <h3>designer</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MasonryBox