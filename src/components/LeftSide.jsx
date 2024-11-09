import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styles from "../styles/leftSide.module.css";
import NoteCard from "./NoteCard";

const LeftSide = ({setDisplayNote,data,setShowAddGrp,setShowLeftSide,showLeftSide,isMobile,}) => {
  
  // set user selected note
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSeceltedNote = (item) => {
    setSelectedNote(item);
    setDisplayNote(item);
    setShowLeftSide(false);
  };

  return (
    <div
      className={styles.leftSide}
      style={{ display: isMobile && showLeftSide ? "block" : "" }}
    >
      <h2 className="heading">Pocket Notes</h2>
      <div className={styles.notesGrp}>

        {/* render already present notes group */}
        {data &&
          data.map((item) => (
            <NoteCard item={item} handleSeceltedNote={handleSeceltedNote} selectedNote={selectedNote} key={item.name}></NoteCard>
          ))
        }
      </div>
      <button className={styles.addGrp} onClick={() => setShowAddGrp(true)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default LeftSide;
