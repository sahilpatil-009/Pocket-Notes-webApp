import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "../styles/leftSide.module.css";

const LeftSide = ({ setDisplayNote, data, setShowAddGrp }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const handleSeceltedNote = (item) => {
    setSelectedNote(item);
    setDisplayNote(item);
  };

  return (
    <div className={styles.leftSide}>
      <h2 className="heading">Pocket Notes</h2>
      <div className={styles.notesGrp}>
        {/* {console.log("this is in left side",data)} */}
        {data &&
          data.map((item) => (
            <div
              key={item.name}
              className={`${styles.grpCard} ${
                selectedNote === item ? styles.active : ""
              }`}
              onClick={() => handleSeceltedNote(item)}
            >
              <p
                className={styles.grLogo}
                style={{ backgroundColor: item.color }}
              >
                {item.grpIcon}
              </p>
              <p className={styles.grName}>{item.name}</p>
            </div>
          ))}
      </div>
      <button className={styles.addGrp} onClick={() => setShowAddGrp(true)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default LeftSide;
