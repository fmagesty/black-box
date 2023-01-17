import React from "react";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.loadingText}>
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
