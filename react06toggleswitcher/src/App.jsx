import { useState } from 'react'

import './App.css'

function App() {
  let [on,seton]=useState(false)

let nam = ()=>{
  seton(!on)
}

  return (
    <>
<h1>toggle switcher</h1>
<div className="main">

  <div className="cont"   onClick={nam}  style={{backgroundColor: on ? "green" :"red"}} >
    <div className={`cir ${on ?"on" : "of"}`}  style={{backgroundColor: on ? "green" :"red"}} >
      <span>{on ? "on" : "of"}
        </span>
      </div>
  </div>
</div>



    </>
  )
}

export default App
