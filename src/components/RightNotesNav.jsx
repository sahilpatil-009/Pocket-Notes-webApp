import React from "react";
import styles from "../styles/rightSide.module.css";
import { FaArrowLeft } from "react-icons/fa";

const RightNotesNav = ({displayNotes, setShowLeftSide}) => {
  return (
    <div className={styles.navbar}>
      <button
        className={styles.backArrow}
        onClick={() => setShowLeftSide(true)}
      >
        <FaArrowLeft />
      </button>
      <div
        style={{ backgroundColor: `${displayNotes.color}` }}
        className={styles.icon}
      >
        {displayNotes.grpIcon}
      </div>
      <div className={styles.grpName}>{displayNotes.name}</div>
    </div>
  );
};

export default RightNotesNav;
