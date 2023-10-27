import { useState } from "react";
// import styles of this component
import styles from "./MasonryLayout.module.css";

// import other react pkg to use

import Masonry from "react-masonry-css";
import InfiniteScroll from "react-infinite-scroll-component";
// import other component to use

import useIPInfo from "../../hooks/useIPInfo";
import MasonryBox from "./MasonryBox/MasonryBox";
// Import a function utils to shuffle an array
import { shuffleArray } from "../../utils/shuffle";

// MasonryLayout Component
const MasonryLayout = ({ users }) => {
  const [shuffledUsers, setShuffledUsers] = useState(users);
  const ipObj = useIPInfo();
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [currentChunk, setCurrentChunk] = useState(0);
  const chunkSize = 5;
  const totalUsers = users.length;

  // Shuffle the users array

  shuffleArray(shuffledUsers);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
  const loadMoreData = () => {
    if (currentChunk * chunkSize < totalUsers) {
      const newChunk = users.slice(
        currentChunk * chunkSize,
        (currentChunk + 1) * chunkSize
      );

      setLoadedUsers([...loadedUsers, ...newChunk]);
      setCurrentChunk(currentChunk + 1);
    }
  };
  return (
    <InfiniteScroll
      dataLength={loadedUsers.length}
      next={loadMoreData}
      hasMore={loadedUsers.length < totalUsers}
      loader={
        <div
          className="loader"
          key={0}
          style={{ color: "white" }}
        >
          Loading ...
        </div>
      }
      endMessage={
        <p style={{ textAlign: "center", color: "white" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles["masonry-grid"]}
        columnClassName={styles["masonry-grid_column"]}
      >
        {loadedUsers.map((item, index) => (
          <MasonryBox
            key={item.id + index}
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
    </InfiniteScroll>
  );
};

export default MasonryLayout;
