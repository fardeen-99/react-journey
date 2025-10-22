import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let [length,setlength] = useState(8)
  let[noallow,setnoallow]= useState(false)
let [password,setpassword] = useState("")

const inputRef = useRef(null);


let passwordgenerator = useCallback(()=>{
let pass=""
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(noallow){
  str+="0123451789"
}
for (let index = 1; index < length; index++) {
let char= Math.floor(Math.random()*str.length +1)
pass += str.charAt(char)
  
}
setpassword(pass)
} , [length,noallow])

useEffect(()=>{
  passwordgenerator()
} , [length,noallow,passwordgenerator])


let passwordcopy = useCallback(()=>{
  inputRef.current?.select()
window.navigator.clipboard.writeText(password)
},[password])

  return (
    <>
      <div className="main">
        <h1>password generator</h1>
        <div className="first">
        <input type="text"
        value={password}
        placeholder='password' 
        ref={inputRef}
        />
        <button
        onClick=
          {passwordcopy}
        
        >copy</button>
        </div>
        <div className="sec">
        <input type="range"
        min={6}
        max={100}
        defaultValue={length}
        onClick={(e)=>{
          setlength(e.target.value)
        }}

         />
         <label htmlFor="">length:{length}</label>
         <input type="checkbox"
         defaultValue={noallow}
         onClick={()=>{
        setnoallow((prev)=>!prev)
         }}
          />
          <label htmlFor="">number</label>
          </div>
      </div>
    </>
  )
}

export default App
