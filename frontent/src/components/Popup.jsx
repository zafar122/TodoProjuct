import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";


const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  
  const [inputTital, setInputTital] = useState(popupContent.title);
  const [inputDec, setInputDec] = useState(popupContent.description);

  const updateToDo = () => {
    axios
      .put(`${baseURL}/put/${popupContent.id}`, { title: inputTital, description: inputDec })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div >
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div >
        <input
            value={inputTital}
            onChange={(e) => setInputTital(e.target.value)}
            type="text"
            placeholder="Add a ToDo..."
          />      <br />
          <input
            value={inputDec}
            onChange={(e) => setInputDec(e.target.value)}
            type="text"
            placeholder="Add a ToDo dec"
          />       <br />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;