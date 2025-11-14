import { useState } from 'react'
import './App.css'

function App() {
  const [display, setdisplay] = useState("")
  const [on, seton] = useState(false)





const handle=(val)=>{

  
  
  // if(isNaN(display))return setdisplay("")
  if (val === "equal") {
  try {
    let cleaned = display.replace(/\b0+(\d+)/g, '$1');
    let result = String(eval(cleaned));
    setdisplay(result);
    seton(Number(result) < 0);
  } catch {
    setdisplay("error");
  }
  return;
}
if(val==="dlt"){

return setdisplay((prev)=>prev.slice(0,-1))

}
if(val==="c"){
  return setdisplay("")
}
setdisplay((prev)=>prev+val)

// if(eval(display)<0){
// seton(true)
// }

}
  return (
    <>
      <div className="input">
        <input type="text"
        
        style={{color:on?"red":"black"}}
        value={display} onChange={(e) => {
  const val = e.target.value;
  if (/^[0-9+\-*/.]*$/.test(val)) {
    setdisplay(val);
  }
}}onKeyDown={(e) => {
  if (e.key === "Enter") {
    handle("equal");
  }
  else if(e.key==="backspace"){
    handle("dlt")
  }
}}/>

      </div>
      <div className='box'>
<button onClick={()=>handle(1)}>1</button>
<button onClick={()=>handle(2)}>2</button>
<button onClick={()=>handle(3)}>3</button>
<button onClick={()=>handle(4)}>4</button>
<button onClick={()=>handle(5)}>5</button>
<button onClick={()=>handle(6)}>6</button>
<button onClick={()=>handle(7)}>7</button>
<button onClick={()=>handle(8)}>8</button>
<button onClick={()=>handle(9)}>9</button>
<button onClick={()=>handle("+")}>+</button>
<button onClick={()=>handle("-")}>-</button>
<button onClick={()=>handle("*")}>x</button>
<button onClick={()=>handle("/")}>/</button>
<button onClick={()=>handle("c")}>c</button>
<button onClick={()=>handle("equal")}>=</button>
<button onClick={()=>handle("dlt")}>dlt</button>

      </div>
<button className='pop' onClick={()=>handle(0)}>0</button>
    </>
  )
}

export default App
