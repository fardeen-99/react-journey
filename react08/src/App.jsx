import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(false)
const[user,setuser]= useState("")
  return (
    <>
    <h1>welcome to evaluation circuit

    </h1>

    {count && <p>you are logged-in</p>}
<p>{user ? `hello welcome ${user}`:"log-in user"}</p>
    <button onClick={()=>setCount((prev)=>!prev)}>{count?"logged-out":"logged-in"} </button>
    <button onClick={()=>setuser("fardeen khan")}>user log-in</button>
    <button on onClick={()=>setuser(null)}>clear all</button>
    </>
  )
}

export default App
