import { useState } from 'react'

import './App.css'

function App() {
const [h,seth]=useState()
const [w,setw]=useState()
const [message,setmessage]=useState()

let bmicalculate=()=>{

if( !h || !w ){
  return setmessage("enter weight and height first")
} else if( isNaN(h) || isNaN(w)){
  return setmessage("enter weight and height first")

}

let height= h / 100
let bmi= w / (height*height)

 setmessage(`your bmi is ${bmi.toFixed(2)}`)

 
 seth("")
 setw("")

}



  return (
    <>

    <div className="main">
<h1 style={{textAlign:"center"}}>bmi calculator</h1>
      <div className="hight">
        <label htmlFor="">height</label>
        <input type="text"
        placeholder='height'
        value={h}
        onChange={(e)=> {
        return  seth(e.target.value)
        }}
        />
      </div>
      <div className="weight">
        <label htmlFor="">weight</label>
        <input type="text"
        placeholder='weight'
        value={w}
        onChange={(e)=> setw(e.target.value)}
        />
      </div>
      <button onClick={bmicalculate}>calculate</button>
      <h4 style={{textAlign:"center"}}>{message}</h4>
    </div>
    </>
  )
}

export default App
