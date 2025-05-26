import React from 'react'
import {useState} from "react"

function App() {
  let students=[
    {name:'Susant', age:"19"},
    {name:'Ravi', age:"20"},
    {name:'Raj', age:"22"},
    {name:'Rahul', age:"21"},
    {name:'Ramesh', age:"20"},
  ]

  let [toppers, setToppers]=useState([])
  let [count, setCount]=useState(0)

  function display(){
    setCount((count)=>{return(count+1)%students.length})
    setToppers(students[count])
  }
  return (
    <div>
      <button onClick={display}>Next Student</button>
      <h1>{toppers.name} {toppers.age} {toppers.name && "- years old"}</h1>
    </div>
  )
}

export default App
