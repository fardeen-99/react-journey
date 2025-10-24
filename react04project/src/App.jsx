// import { useState } from 'react'

import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
let [color,setcolor]= useState("olive")
  return (
    <>
<div className="main" style={{backgroundColor: color}} >
  <div className="cont">
    <button style={{backgroundColor:"red"}} onClick={()=>{
    setcolor("red")
    }}>red</button>
    <button  style={{backgroundColor:"blue"}} onClick={()=>{
    setcolor("blue")
    }}>blue</button>
    <button  style={{backgroundColor:"green"}} onClick={()=>{
    setcolor("green")
    }}>green</button>
    <button  style={{backgroundColor:"yellow"}} onClick={()=>{
    setcolor("yellow")
    }}>yellow</button>
  </div>
</div>

    </>
  )
}

export default App
