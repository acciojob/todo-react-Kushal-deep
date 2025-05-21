
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [inputodo,setInputtodo]=useState("")
  const [todo,setTodo]=useState([])


const handletodo =()=>{

   if (inputodo.trim() !== "") {
      setTodo([...todo, inputodo]);
      setInputtodo(""); 
    }


}



const deletetodo = (indexToDelete) => {
  const updatedTodos = todo.filter((_, index) => index !== indexToDelete);
  setTodo(updatedTodos);
};


  return (
    <div>
        {/* Do not remove the main div */}
        <h1>To-Do-List</h1>

        <input type="text"  value={inputodo} onChange={(e)=>setInputtodo(e.target.value)}></input>
        <button onClick={handletodo}>Add Todo</button>

        {
          todo.map((item,index)=>(
            <div key={index}>
              <ul>
              <li>{item} </li>
              </ul>
              <button onClick={() => deletetodo(index)}>Delete</button>
            </div>

          )
          )

          
        }
    </div>
  )
}

export default App
