import React from "react";
import styles from "../styles/rightSide.module.css";

const NotesBox = ({displayNotes}) => {
  return (
    <div className={styles.notesBox}>
      {displayNotes.notes.map((item, index) => (
        <div key={index} className={styles.notePad}>
          <div>{item.note}</div>
          <div className={styles.dateTime}>
            <li>{item.date}</li>
            <li>{item.time}</li>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesBox;
