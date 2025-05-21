import React, {useState} from 'react'
import "./Input.css"
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

function Input() {
  const [message, setMessage]=useState("")
  const[todos, setTodos]=useState([])
  const [doneIndex, setDoneIndex] = useState()
  const [deleteIndex, setDeleteIndex]=useState()


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

  return (
    <div className='container'>
      <h1 className='heading'>Todo App</h1>
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
       {todos.length==0?"":<div className="btn-2"><button onClick={(()=>setTodos([]))} className='clear-btn'>Clear All</button></div>} 
    </div>
  )
}

export default Input
