import React from 'react'

function DateTime() {
  const[dateTime, setDateTime] = useState("")
  
    useEffect(()=>{
    setInterval(()=>{
    const now= new Date()
    const date= now.toLocaleDateString()
    const time=now.toLocaleTimeString()
    setDateTime(date +" - " + time)
   },1000)

      return ()=>{
    clearInterval(id) // means do this beforethe actual function to cleanup 
   }
  },[])
  
  return (
    <div>
      <h1>{dateTime}</h1>
    </div>
  )
}

export default DateTime
