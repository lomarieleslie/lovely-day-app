// import React, {useState} from "react";
// import ToDo from "./ToDo";
// import ToDoForm from "./ToDoForm";

// function ToDoList() {
//     const [toDos, setToDos] = useState([]);

//     const addToDo = toDo => {
//         if(!toDo.text || /^\s$/.test(toDo.text)) {
//             return
//         }

//         const newToDos = [toDo, ...toDos]

//         setToDos(newToDos);
        
//     };

//     const completeToDo = id => {
//         let updatedToDos = toDos.map(toDo => {
//             if (toDo.id === id) {
//                 toDo.isComplete = !toDo.isComplete
//             }
//             return toDo
//         })
//         setToDos(updatedToDos);
//     }


//     return (
//         <div>
//             <h3>hopes wishes dreams for you day go here:</h3>
//             <ToDoForm onsubmit={addToDo} />
//             <ToDo 
//             toDos={toDos} completeToDo={completeToDo} />
//         </div>
//     )
// }


// export default ToDoList