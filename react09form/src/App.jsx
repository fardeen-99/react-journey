import { useState } from 'react'
import './App.css'

function App() {
  const [user,setuser] = useState({
    
    firstname:"",
    lastname:"",
    email:""
    
  })
const handle =(e)=>{
  const{name,value}=e.target
  setuser((prev)=>({...prev,[name]:value}))
}


const submit=(e)=>{
e.preventDefault()
console.log(user);
   setuser({
      firstname: "",
      lastname: "",
      email: ""
    });
}
  return (
    <>

<h1>login form</h1>
<form onSubmit={submit}>

  <label htmlFor="firstname">fairstname:</label>
  <input type="text"
  required
  name='firstname'
  placeholder='enter your first name'
value={user.firstname}
onChange={handle}
  />
  <label htmlFor="lastname">lastname:</label>
  <input type="text"
  required
  name='lastname'
  placeholder='enter your last name'
  value={user.lastname}
onChange={handle}
  />
  <label htmlFor="email">e-mail:</label>
  <input type="text"
  required
  name='email'
  placeholder='enter your email'
value={user.email}
onChange={handle}
  />
  <button>submit</button>
</form>

    </>
  )
}

export default App
