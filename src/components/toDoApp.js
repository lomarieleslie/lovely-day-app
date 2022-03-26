import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import toDoApp from '../firebaseSetup';

function ToDoApp() {
  // initialize state and variables to hold users dreams for their day as well as input
  const [toDos, setToDos] = useState([]);
  const [userInput, setUserInput] = useState("");

  // creating an eventHandler that will run when user types in the input field
  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const database = getDatabase(toDoApp);

    const dbRootAddress = ref(database);

    push(dbRootAddress, userInput);

    setUserInput("");
  };

  const handleRemove = (toDoId) => {
    const database = getDatabase(toDoApp);

    const dbtoDoAddress = ref(database, `${toDoId}`);

    remove(dbtoDoAddress);
  };

  useEffect(() => {
    const database = getDatabase(toDoApp);

    const dbRootAddress = ref(database);

    onValue(dbRootAddress, (response) => {
      const newTodo = [];

      const data = response.val();

      for (let key in data) {
        newTodo.push({ key: key, name: data[key] });
      }

      setToDos(newTodo);
    });
  }, []);

  // Display To-Do List
  return (
    <div className="to-do-app-container">
      <form action="submit" onSubmit={handleSubmit}>
        <label className="to-do-label" htmlFor="newToDo">To-Do list:</label>
        <div className="to-do-input-button-flex"> <button className="add-to-do-button">Add To Do</button>
        <input
          className="to-do-input" type="text"
          id="newToDo" placeholder="Add to-do here"
          onChange={handleInput}
          value={userInput} required
        /></div>
       
        
      </form>

      {toDos.map((toDo) => {
        return (
          <ul>
            <li className="to-do-item" key={toDo.key}>
              <div className="to-do-item-and-button"><p className="to-do-item">{toDo.name}</p>
              <button
                className="remove-toDo"
                onClick={() => {
                  handleRemove(toDo.key);
                }}
              >
                {" "}
               x{" "}
              </button></div>
              
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ToDoApp;
