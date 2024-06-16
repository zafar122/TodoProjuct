import React from 'react'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import axios from 'axios';
import { baseURL } from '../utils/constant.js';


function TodoPage({ title, description, id, setUpdateUI, setShowPopup, setPopupContent }) {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ title, description , id });
    setShowPopup(true);
  };

  return (
    <div>
      <div>
        <span>{title}</span><br />
        <span>{description}</span>
        <span onClick={updateToDo}>
          <MdOutlineDriveFileRenameOutline />
        </span>
        <span onClick={deleteTodo}>
          <CgClose />

        </span>
      </div>
    </div>
  )
}

export default TodoPage