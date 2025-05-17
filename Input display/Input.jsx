import React from 'react'
import {useState} from 'react'

function Input() {
    const [message, setMessage]=useState("Whatever you type will appear here")
  return (
    <div>
      <form>
        <input type='text' value={message} onChange={(evnt)=>setMessage(evnt.target.value)}></input>
      </form>
      <h1>{message}</h1>
    </div>
  )
}
export default Input
