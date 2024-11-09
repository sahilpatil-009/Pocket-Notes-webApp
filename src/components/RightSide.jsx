import React, { useState } from "react";
import styles from "../styles/rightSide.module.css";
import RightsideDefault from "./RightsideDefault";
import RightNotesNav from "./RightNotesNav";
import NotesBox from "./NotesBox";
import InputField from "./InputField";

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
      style={{ display: isMobile && showLeftSide ? "none" : "block" }}
    >
      {/* Conditioinal Rendering */}
      {/* If not yet seleced Notes-Group then default window shown on rightside */}
      {displayNotes === null ? (
        <RightsideDefault />
      ) : (
        // Render users notes after user select Notes-Group
        <div className={styles.notesSection}>
          {/* displays logo and name of Notes-Group on top */}
          <RightNotesNav
            displayNotes={displayNotes}
            setShowLeftSide={setShowLeftSide}
          />

          {/* Render user Prevoius Notes and New notes after adding newNote */}
          <NotesBox displayNotes={displayNotes} />

          {/* User inputs New Note */}
          <InputField
            handleSubmit={handleSubmit}
            handleTextArea={handleTextArea}
            textAreaInput={textAreaInput}
          />
        </div>
      )}
    </div>
  );
};

export default RightSide;
