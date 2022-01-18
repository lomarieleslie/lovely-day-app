import React, {useState, useEffect} from "react";
import {getDatabase, ref, onValue, push, remove} from 'firebase/database';
import toDoApp from "./firebaseSetup";


function ToDoApp() {

    // initialize state and variables to hold users dreams for their day as well as input
    const [toDos, setToDos] = useState([]);
    const [userInput, setUserInput] = useState('');

    // creating an eventHandler that will run when user types in the input field
    const handleInput = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const database = getDatabase(toDoApp);

        const dbRootAddress = ref(database);

        push(dbRootAddress, userInput);

        

        setUserInput('');

    };

    const handleRemove = (toDoId) => {

      const database = getDatabase(toDoApp);

      const dbtoDoAddress = ref(database, `${toDoId}`);

      remove(dbtoDoAddress);

    }

    useEffect( () => {

      const database = getDatabase(toDoApp);

      const dbRootAddress = ref(database);

      onValue(dbRootAddress, (response) => {
        const newTodo = []

        const data = response.val();

        for (let key in data) {
          newTodo.push({key: key, name: data[key]})
        }

        setToDos(newTodo);

      })

    }, []);



// Display To-Do List
  return (
    <div>
     
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="newBook">What dreams have you for your day?</label>
        <input type="text" id="newToDo" onChange={handleInput} value={userInput}/>
        <button>Add Dream</button>
      </form> 
      
        {toDos.map((toDo)=>{
          return (
<ul>
            <li key={toDo.key}>
              <p>{toDo.name}</p>
              <button className="add-toDo" onClick={()=>{handleRemove(toDo.key)}}> Done </button>
            </li>
           </ul> )
        })}
    
    </div>
  );



}

export default ToDoApp;