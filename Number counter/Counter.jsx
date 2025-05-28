import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0)
    let [steps, setSteps] = useState(0)

    const divStyling={
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    };
    const buttons={
        width:"75px",
        height:"35px",
        backgroundColor:"lightgreen",
        borderRadius:"5px"
    }
    const buttonStylings={
        display:"flex",
        gap:"10px",
        marginTop:"20px"
    };
    
  return (
    <div style={divStyling}>
      <h1 style={{fontSize:"60px"}}>{count}</h1>
      <p>Steps to increase or decrease the count:</p>

      <input type='number' onChange={(e)=>setSteps(Number(e.target.value))} placeholder='steps here'></input>

      <div style={buttonStylings}>
      <button style={buttons} onClick={()=>setCount((prev)=> {return (prev+steps)})}>Plus</button>
      <button style={buttons} onClick={()=>setCount((prev)=>{return (prev-steps)})}>Minus</button>
      <button style={buttons} onClick={()=>setCount(0)}>Restart</button>
      </div>
    </div>
  )
}

export default Counter
