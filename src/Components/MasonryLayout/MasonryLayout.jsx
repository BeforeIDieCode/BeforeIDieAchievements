// import styles of this component
import styles from "./MasonryLayout.module.css";

// import other react pkg to use
import Masonry from "react-masonry-css";

// import other component to use
import MasonryBox from "./MasonryBox/MasonryBox";

import useIPInfo from "../../hooks/useIPInfo";

// MasonryLayout Component
const MasonryLayout = ({ users }) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const ipObj = useIPInfo();

  // Shuffle the users array
  const shuffledUsers = users.sort(() => Math.random() - 0.5);

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["masonry-grid"]}
      columnClassName={styles["masonry-grid_column"]}
    >
      {shuffledUsers.map((item) => (
        <MasonryBox
          key={item.id}
          wallSrc={item.image}
          userProf={item.avatar}
          userName={item.name}
          userLocation={item.location}
          githubUrl={item.GitHub}
          userText={item.text}
          ipObj={ipObj}
        />
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
