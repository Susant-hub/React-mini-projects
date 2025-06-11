import React, {useEffect}, {useState} from 'react'

function Timer() {
  const [timer, setTimer]= useState(0)
  const [running, setRunning] = useState(false)

  useEffect(()=>{
    let id
    if(running)
    {
      id = setInterval(()=>setTimer(prev=>prev+1), 1000)
    }
  return ()=> {clearInterval(id);}
  
  }, [running])

  return (
    <div style={{textAlign:"center"}}>
      <h1>Timer</h1>
      <h1>{timer}</h1>
      <button onClick={()=>setRunning(true)}>Start</button>
      <button onClick={()=>setRunning(false)}>Stop</button>
    </div>
  )
}

export default Timer
