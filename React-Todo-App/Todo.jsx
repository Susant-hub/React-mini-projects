import React, {useState} from 'react'

function Input() {
  const [message, setMessage]=useState("")
  const[todos, setTodos]=useState([])

  function handleTodo(e){
    e.preventDefault()
   setTodos((prev)=>[...prev, message])
   setMessage("")
  }
  return (
    <div>
      <form>
        <input type="text" value={message} onChange={(evnt)=>{setMessage(evnt.target.value)}}></input>
        <button onClick={handleTodo}>Add</button>
      </form>
      <ol>
        {todos.map((ele, index)=><li key={index}>{ele}</li>)}
      </ol>
    </div>
  )
}

export default Input
