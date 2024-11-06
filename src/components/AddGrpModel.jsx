import React, { useRef, useState } from "react";
import styles from "../styles/addGrpModel.module.css";

const AddGrpModel = ({ onClose, setData, data, AddToGrpArray}) => {
  
  const [selectedColor, setSelectedcolor] = useState("");
  // const [buttonClick, setButtonClick] = useState(false);

  const modelRef = useRef();
  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  const handleColorClick = (color) => {
    setSelectedcolor(color); 
    setData((prevData) => ({
      ...prevData,
      color: color,
    }));
  };

  const handleChange = (e) => {
    const { value } = e.target;

    const word = value.trim().split(" ");
    let icon = "";
    if(word.length === 1){
      icon = word[0].slice(0,2);
    } 
    else{
      icon = word[0][0] + word[word.length - 1][0];
    }

    setData((prevData) =>({
      ...prevData,
      name: value,
      grpIcon: icon.toUpperCase(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(false);
    AddToGrpArray();
  };

  return (
    <div className={styles.container} ref={modelRef} onClick={closeModel}>
      <form className={styles.NewGrp} onSubmit={handleSubmit}>
        <h2>Create New Group</h2>
        <label>
          Group Name{" "}
          <input
            type="text"
            placeholder="Enter group Name"
            name="GrpName"
            onChange={handleChange}
            required
          />
        </label>
        <div className={styles.colorContainer}>
          <h3>Choose colour</h3>
          <div className={styles.chooseColors}>
            {[
              "#B38BFA",
              "#FF79F2",
              "#43E6FC",
              "#F19576",
              "#0047FF",
              "#6691FF",
            ].map((color) => (
              <button
                key={color}
                type="button"
                style={{
                  backgroundColor: color,
                  border: selectedColor === color ? "2px solid #555" : "none",
                }}
                onClick={() => handleColorClick(color)}
                className={styles.colorBtn}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          // className={styles.submit}
          className={data.name.length < 2 || data.color === "" ? styles.btnDisable : styles.submit}
          disabled={data.name.length < 2 || data.color === ""}

        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AddGrpModel;
