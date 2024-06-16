import TodoPage from "./components/Todo.jsx"
import axios from "axios";
import { baseURL } from "./utils/constant";
import Popup from "./components/Popup";
import { useEffect, useState } from "react";

function App() {

  const [toDos, setToDos] = useState([]);
  const [inputTital, setInputTital] = useState("");
  const [inputDec, setInputDec] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setToDos(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [updateUI])

  const saveToDo = () => {
    axios
      .post(`${baseURL}/post`, { title: inputTital, description: inputDec })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInputTital("");
        setInputDec("");
      })
      .catch((err) => console.log(err));
  };


  return (
    <>

      <div>
        <h1>Todo App  </h1>
        <div>
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
          <button onClick={saveToDo}>Add</button>    </div>

      </div>
      <div>
        <div><h3>Todo list</h3></div>
        {toDos.map((el) => (
          <TodoPage
            key={el._id}
            title={el.title}
            description={el.description}
            id={el._id}
            setUpdateUI={setUpdateUI}
            setShowPopup={setShowPopup}
            setPopupContent={setPopupContent}
          />
        ))}
      </div>
      <div>
        {showPopup && (
          <Popup
            setShowPopup={setShowPopup}
            popupContent={popupContent}
            setUpdateUI={setUpdateUI}
          />
        )}
      </div>

    </>
  )
}

export default App
