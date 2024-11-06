import React from "react";
import styles from "../styles/rightSide.module.css";
import MainImage from "../assets/main_page.png";
import { MdLock } from "react-icons/md";

const RightSide = ({ displayNotes }) => {
  return (
    <div className={styles.container}>
      {displayNotes === null ? (
        <div className={styles.rightSideDefault}>
          <div className={styles.imageSec}>
            <img src={MainImage} alt="main Image" />
            <h2>Pocket Notes</h2>
            <p>
              Send and receive messages without keeping your phone online.{" "}
              <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile
              phone
            </p>
          </div>
          <div className={styles.encryption}>
            <MdLock />
            end-to-end encrypted
          </div>
        </div>
      ) : (
        <div className={styles.notesSection}>
          <div className={styles.navbar}>
            <div style={{backgroundColor:`${displayNotes.color}`}} className={styles.icon}>{displayNotes.grpIcon}</div>
            <div className={styles.grpName}>{displayNotes.name}</div>
          </div>
          <div className={styles.notesBox}>{displayNotes.name}</div>
          <div className={styles.inputBox}>
            <textarea placeholder="Enter your text here..........."></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightSide;
