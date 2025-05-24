import React, {useEffect, useState} from 'react'
import "./Todo.css"
import { MdAdd, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function Todo() {
  const [message, setMessage]=useState("")

  const [todos, setTodos]=useState(()=>{
    const returnTodos=localStorage.getItem("storeTodos")
    if(!returnTodos) return []
    return JSON.parse(returnTodos)
  })

  const [doneIndex, setDoneIndex] = useState()
  const [deleteIndex, setDeleteIndex]=useState()
  const [dateTime, setDateTime]=useState()

  localStorage.setItem("storeTodos", JSON.stringify(todos))

  function handleTodo(e){
    e.preventDefault()
    if(message=="") return
    if(todos.includes(message))return
    setTodos((prev)=>[...prev, message])
    setMessage("")
  }

  function handleDone(indexToDone) {
  setDoneIndex(indexToDone);

  setTimeout(() => {
    setTodos(prev => prev.filter((_, index) => index !== indexToDone));
    setDoneIndex();
  }, 1000);
}

  function handleDelete(indexToDelete){
    setDeleteIndex(indexToDelete)

    setTimeout(()=>{
      setTodos((prev)=>prev.filter((_,index)=>index!==indexToDelete))
      setDeleteIndex()
    },1000)
  }
  
  useEffect(()=>{
    setInterval(()=>{
    const now= new Date()
    const date= now.toLocaleDateString()
    const time=now.toLocaleTimeString()
    setDateTime(date +" - " + time)
   },1000)
  },[])
  

  return (
    <div className='container'>
      <h1 className='heading'>Todo App</h1>
      <h2>{dateTime}</h2>
      <form className="form">
        <input type="text" value={message} onChange={(evnt)=>{setMessage(evnt.target.value)}} className='input' placeholder="Enter your tasks"></input>
        <button onClick={handleTodo} className='btn'><MdAdd/></button>
      </form>
      <div className='tasks'>
        {todos.map((ele, index)=>
            <div key={index} className={`task-container ${doneIndex===index ?"done-task" :""} ${deleteIndex===index ?"delete-task" : ""}`}>
              <div  className='task'>{doneIndex===index ? "Task Completed" : deleteIndex===index ?"Task Removed" : ele} </div>
              <div className='icons'>
                {(doneIndex===index || deleteIndex===index) ?"":
                <>
                <FaCheck className='done' onClick={()=>handleDone(index)} />
                <MdDelete  onClick={()=>handleDelete(index)} className='delete'/>
                </>
                }
              </div>
            </div>)}
        </div>
       {todos.length==0?null:<div className="btn-2"><button onClick={(()=>setTodos([]))} className='clear-btn'>Clear All</button></div>} 
    </div>
  )
}

export default Todo
