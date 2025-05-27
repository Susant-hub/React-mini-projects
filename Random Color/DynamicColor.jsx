import React,{useState} from 'react'
import "./Dynamic.css"


function DynamicColor() {
    const colors=["red","green","blue","yellow","orange","black","purple","pink","brown"]
    const [color, setColor]=useState(null)


    function handleClick(){
        let randomNumber=Math.floor(Math.random()*colors.length)
        setColor(colors[randomNumber])
    }

    const divStyling={
        height:"100px",
        width:"100px",
        border:"1px solid black"
    };

  return (
    <div>
      <div style={divStyling} className={color?color:null}></div>
      <h1>{color}</h1>
      <button onClick={handleClick}>Generate Color</button>
    </div>
  )
}

export default DynamicColor
