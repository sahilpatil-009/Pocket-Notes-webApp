import React from "react";
// import styles from "../styles/leftSide.module.css";
import styles from "../styles/noteCard.module.css";

const NoteCard = ({ item, handleSeceltedNote, selectedNote }) => {
  return (
    <div
      className={`${styles.grpCard} ${
        selectedNote === item ? styles.active : ""
      }`}
      onClick={() => handleSeceltedNote(item)}
    >
      <p className={styles.grLogo} style={{ backgroundColor: item.color }}>
        {item.grpIcon}
      </p>
      <p className={styles.grName}>
        {item.name.length > 20 ? item.name.slice(0, 18) + "..." : item.name}
      </p>
    </div>
  );
};

export default NoteCard;
