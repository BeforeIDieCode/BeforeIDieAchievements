// import styles of this component
import styles from "./MasonryLayout.module.css";

// import other react pkg to use
import Masonry from "react-masonry-css";

// import other component to use
import MasonryBox from "./MasonryBox/MasonryBox";

// MasonryLayout Component
const MasonryLayout = ({ images }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  // Shuffle the images array
  const shuffledImages = images.sort(() => Math.random() - 0.5);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {shuffledImages.map((item) => (
        <MasonryBox
          key={item.id}
          wallSrc={item.image}
          userProf={item.avatar}
          userName={item.name}
          userJob={item.location}
          githubUrl={item.GitHub}
          userText={item.text}
        />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
