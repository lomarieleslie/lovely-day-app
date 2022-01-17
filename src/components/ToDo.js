// import React, { useState } from "react";
// import ToDoForm from "./ToDoForm";
// import ToDoList from "./ToDoList";
// // import { IoCloseSharp } from 'react-icons/io';
// // import { AiOutlineEdit } from 'react-icons/ai';


// function ToDo({toDos, completeToDo}) {
//     const [edit, setEdit] = useState({
//         id: null,
//         value: ''
//     });



// return toDos.map((toDo, index) => (
// <div className={toDo.isComplete ? 'item complete' : 'item'} key={index}>

// <div key={toDo.id} onClick={() => completeToDo(toDo.id)}>
// {toDo.text}

// </div>
// <div className='icons'>
//     {/* <IoCloseSharp />
//     <AiOutlineEdit /> */}
// </div>
// </div>

// ));

// }

// export default ToDo;