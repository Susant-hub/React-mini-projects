import React, {useState} from 'react'
import "./Input.css"
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function Input() {
  const [message, setMessage]=useState("")
  const[todos, setTodos]=useState([])

  function handleTodo(e){
    e.preventDefault()
    setTodos((prev)=>[...prev, message])
    setMessage("")
  }

  function handleDelete(indexToRemove){
    setTodos(prev => prev.filter((_, idx) => idx !== indexToRemove));
  }
  return (
    <div className='container'>
      <h1 className='heading'>Todo App</h1>
      <form className="form">
        <input type="text" value={message} onChange={(evnt)=>{setMessage(evnt.target.value)}} className='input' placeholder="Enter your tasks"></input>
        <button onClick={handleTodo} className='btn'><MdAdd/></button>
      </form>
      <div className='tasks'>
        {todos.map((ele, index)=>
            <div key={index} className='task-container'>
              <div  className='task'>{ele}</div>
              <div className='icons'><MdDelete  onClick={()=>handleDelete(index)} className='delete'/></div>
            </div>)}
        </div>
    </div>
  )
}

export default Input
