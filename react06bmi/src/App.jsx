

import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'

function App() {
// const [h,seth]=useState()
// const [w,setw]=useState()
const [message,setmessage]=useState()


let initial={
height:'',
weight:''
}

const reducer=(state,action)=>{

  switch (action.type) {
    case "bmi":
      return {...state,[action.field]:action.value}
       
      case "reset":
        return initial
      
  
    default:
      return state
  }
}

const[state,dispatch]=useReducer(reducer,initial)
let bmicalculate=()=>{

if( !state.height || !state.weight ){
  return setmessage("enter weight and height first")
} else if( isNaN(state.height) || isNaN(state.weight)){
  return setmessage("enter weight and height first")

}

let height= state.height / 100
let bmi= state.weight / (height*height)

 setmessage(`your bmi is ${bmi.toFixed(2)}`)

 

 dispatch({type:"reset"})



}



  return (
    <>

    <div className="main">
<h1 style={{textAlign:"center"}}>bmi calculator</h1>
      <div className="hight">
        <label htmlFor="">height</label>
        <input type="text"
        placeholder='height'
        value={state.height}
        onChange={(e)=> dispatch({type:"bmi",field:"height",value:e.target.value})}
        />
      </div>
      <div className="weight">
        <label htmlFor="">weight</label>
        <input type="text"
        placeholder='weight'
        value={state.weight}
 onChange={(e)=> dispatch({type:"bmi",field:"weight",value:e.target.value})}
        />
      </div>
      <button onClick={bmicalculate}>calculate</button>
      <h4 style={{textAlign:"center"}}>{message}</h4>
    </div>
    </>
  )
}

export default App
