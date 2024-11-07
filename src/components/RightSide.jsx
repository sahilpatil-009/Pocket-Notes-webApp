import React, { useState } from "react";
import styles from "../styles/rightSide.module.css";
import MainImage from "../assets/main_page.png";
import { MdLock } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";

const RightSide = ({
  displayNotes,
  setDisplayNote,
  grpArray,
  setGrpArray,
  isMobile,
  showLeftSide,
  setShowLeftSide,
}) => {
  //holds user input in TextArea
  const [textAreaInput, setTextAreaInput] = useState();

  // handle user input in TextArea
  const handleTextArea = (e) => {
    const value = e.target.value;
    setTextAreaInput(value);
  };

  // handle submit form event
  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();

    //object Bueprint for newNote
    const newNote = {
      note: textAreaInput,
      date: formatDate(now),
      time: formatTime(now),
    };

    // search the User selected notes-Group in Note_Group_Array
    //and
    // Add newNote to user selected noteGroups -> notes[]
    const updateGroup = grpArray.map((group) =>
      group.name === displayNotes.name
        ? { ...group, notes: [...group.notes, newNote] }
        : group
    );

    // update NotesGroupArray
    setGrpArray(updateGroup);

    // add new notes input by user
    const updateDisplayNotes = {
      ...displayNotes,
      notes: [...displayNotes.notes, newNote],
    };

    setDisplayNote(updateDisplayNotes); //render new Note on Notes-Display

    setTextAreaInput(""); // Clear the textarea after submission
  };

  const formatDate = (now) => {
    // Define options for date format
    const dateOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    return now.toLocaleDateString("en-US", dateOptions);
  };

  const formatTime = (now) => {
    //Define optinos for time format
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return now.toLocaleTimeString("en-US", timeOptions);
  };
  
  return (
    <div
      className={styles.container}
      style={{display : isMobile && showLeftSide ? "none":"block"}}
    >
      {/* Conditioinal Rendering */}
      {/* If not yet seleced Notes-Group then default window shown on rightside */}
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
        // Render users notes after user select Notes-Group
        <div className={styles.notesSection}>
          {/* displays logo and name of Notes-Group on top */}
          <div className={styles.navbar}>
            <button className={styles.backArrow} onClick={()=>setShowLeftSide(true)}>
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
          {/* Render user Prevoius Notes and New notes after adding newNote */}
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
          {/* User inputs New Note */}
          <form className={styles.inputBox} onSubmit={handleSubmit}>
            <textarea
              placeholder="Enter your text here..........."
              value={textAreaInput}
              onChange={handleTextArea}
            ></textarea>
            <button
              className={styles.sendIcon}
              style={{ color: textAreaInput ? "#001F8B" : "" }}
              type="submit"
            >
              <IoSend />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RightSide;
