import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
// import notes from "./data/notes";
import AddGrpModel from "./components/AddGrpModel";

const App = () => {
  const [displayNote, setDisplayNote] = useState(null);
  
  const [showAddGrp, setShowAddGrp] = useState(false);

  // store all Notes Group in array
  const [grpArray, setGrpArray] = useState([]);

  // use to create new Notes Group
  const [data, setData] = useState({
    name: "",
    color: "",
    grpIcon: "",
    
  });

  console.log(grpArray);

  //add new Notes Group to Notes Array
  const AddToGrpArray = () => {
    console.log("AddToGrpArray start");
    if (data.name && data.color && data.grpIcon) {
      setGrpArray((prevArray) => [...prevArray, data]);

      setData({ name: "", color: "", grpIcon: "" });
    }
  };

  // Retrive stored notes from local storage
  useEffect(() => {
    const storedData = localStorage.getItem("grpArray");
    if (storedData) {
      setGrpArray(JSON.parse(storedData));
    }
  }, []);

  //store updated or new notes in local storage
  useEffect(() => {
    localStorage.setItem("grpArray", JSON.stringify(grpArray));
  }, [grpArray]);

  return (
    <div className={styles.container}>
      <LeftSide
        setDisplayNote={setDisplayNote}
        data={grpArray}
        setShowAddGrp={setShowAddGrp}
      />
      <RightSide displayNotes={displayNote} />
      {showAddGrp && (
        <AddGrpModel
          onClose={() => setShowAddGrp(false)}
          setData={setData}
          data={data}
          AddToGrpArray={AddToGrpArray}
        />
      )}
    </div>
  );
};

export default App;
