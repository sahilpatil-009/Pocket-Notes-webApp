import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
// import notes from "./data/notes";
import AddGrpModel from "./components/AddGrpModel";

const App = () => {
  //set user selected Note-group
  const [displayNote, setDisplayNote] = useState(null);

  //set the user seelcted Note-group
  const [selectedNote, setSelectedNote] = useState(null);

  //set when show the New-add Group
  const [showAddGrp, setShowAddGrp] = useState(false);

  // store all Notes Group in array
  const [grpArray, setGrpArray] = useState([]);

  // use to create new Notes Group
  const [data, setData] = useState({
    name: "",
    color: "",
    grpIcon: "",
    notes: [],
  });

  const [showLeftSide, setShowLeftSide] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
  // const[isMobile, setIsMobile]  = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log("is mobile", isMobile);
  // console.log("is leftside show", showLeftSide);
  // console.log(grpArray);

  //add new Notes Group to Notes Array
  const AddToGrpArray = () => {
    if (data.name && data.color && data.grpIcon) {
      setGrpArray((prevArray) => [...prevArray, data]);

      setData({ name: "", color: "", grpIcon: "", notes: [] });
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
        setShowLeftSide={setShowLeftSide}
        showLeftSide={showLeftSide}
        isMobile={isMobile}
      />
      <RightSide
        displayNotes={displayNote}
        setDisplayNote={setDisplayNote}
        grpArray={grpArray}
        setGrpArray={setGrpArray}
        isMobile={isMobile}
        showLeftSide={showLeftSide}
        setShowLeftSide={setShowLeftSide}
      />
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
