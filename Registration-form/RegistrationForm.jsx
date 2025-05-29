import React,{useState} from 'react'

function Registration() {

    const [firstName, setFirstName] = useState("")
    const[lastName, setLastName]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("") 
    const[number, setNumber]= useState("")

  return (

    <div>
      <p >First Name:</p>
      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>

      <p >Last Name:</p>
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>

      <p >Email:</p>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>

      <p >Password:</p>
      <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

      <p >Number:</p>
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>

      <h2>Information:</h2>
      {firstName && lastName && <h3>Name: {firstName} {lastName}</h3>}
      {email && <h3>Email: {email}</h3>}
      {password && <h3>Password: {password}</h3>}
      {number && <h3>Number: {number}</h3>}

    </div>
  )
}

export default Registration
