import React from "react";
import "../index.css";

import styles from "./Circle.module.css";

function Circle({ count }) {
  return <div className={styles.circle}>{count}</div>;
}

export default Circle;
