import React from 'react'
import {useState} from 'react'

function Counter() {
    let [count, setCount] = useState(0)

    const divStyling={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        fontSize:"50px"
    };
    const buttons={
        width:"75px",
        height:"35px",
        backgroundColor:"lightgreen",
        borderRadius:"5px"
    }
    const buttonStylings={
        display:"flex",
        gap:"10px"
    };
    
  return (
    <div style={divStyling}>
      <h1>{count}</h1>
      <div style={buttonStylings}>
      <button style={buttons} onClick={()=>setCount((prev)=> {return (prev+1)})}>Plus</button>
      <button style={buttons} onClick={()=>setCount((prev)=>{return (prev-1)})}>Minus</button>
      <button style={buttons} onClick={()=>setCount(0)}>Restart</button>
      </div>
    </div>
  )
}

export default Counter
