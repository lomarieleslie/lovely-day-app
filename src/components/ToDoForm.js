// import React, {useEffect, useRef, useState} from "react";


// function ToDoForm(props) {
//     const [input, setInput] = useState(props.edit ? props.edit.value : '');

//     // const inputRef = useRef(null);

//     // useEffect(() => {
//     //     inputRef.current.focus('');
//     // });

//     const handleChange = dreams => {
//         setInput(dreams.target.value)
//     }

//     const handleSubmit = dreams => {
//         dreams.preventDefault();

//         props.onSubmit({
//             id: Math.floor(Math.random() * 10000),
//             text: input
//         });
//         setInput('');
//     };

//     return(
//         <form className='to-do-form' onSubmit={handleSubmit}>
//             <input 
//             className='to-do-input'
//             type="text" 
//             placeholder='Add dreams here'
//             value={input}
//             name='text'
//             onChange={handleChange}
//               />
//               <button className='to-do-button'>Add Dream</button>
//         </form>
//     );
// }


// export default ToDoForm;
