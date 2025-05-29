import React,{useState} from 'react'

function Registration() {

    const [user, setUser] = useState(
        {
            firstName:"",     
            lastName:"",
            email:"",
            password:"",         
            number:""     
        }
    )  

    function handleInput(e){
        const {name, value}=e.target        // destructuring the event.target from the event onChange

        setUser((prev)=> ({...prev, [name]:value}))          // [ ] in name means dynamic ; doesnt't adds new object property
                                                            // if already existed in the object, changes the value just
    }
    function handleClick(){
        console.log(user)
    }

  return (
    <div style={{textAlign:"center"}}>
      <p >First Name:</p>
      <input type="text" value={user.firstName} name='firstName' onChange={(e)=>handleInput(e)}></input>

      <p >Last Name:</p>
      <input type="text" value={user.lastName} name='lastName' onChange={(e)=>handleInput(e)}></input>

      <p >Email:</p>
      <input type="text" value={user.email} name='email' onChange={(e)=>handleInput(e)}></input>

      <p >Password:</p>
      <input type="text" value={user.password} name='password' onChange={(e)=>handleInput(e)}></input>

      <p >Number:</p>
      <input type="text" value={user.number} name='number' onChange={(e)=>handleInput(e)}></input>

      <button onClick={handleClick} style={{display:"block", margin:"auto", marginTop:"20px"}}>Sign Up</button>
      
    </div>
  )
}

export default Registration
