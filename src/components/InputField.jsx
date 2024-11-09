import React from "react";
import styles from "../styles/rightSide.module.css";
import { IoSend } from "react-icons/io5";

const InputField = ({handleSubmit, handleTextArea, textAreaInput}) => {
  return (
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
  );
};

export default InputField;
