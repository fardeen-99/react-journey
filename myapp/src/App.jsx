
import { useState } from "react" 
import Chai from "./final"

function App() {
  let [counter,setcounter]=useState(15)
function add(){
  if(counter < 20)
  setcounter(counter+1)
}
function remove(){
  if(counter > 0)
  setcounter(counter-1)
}

function clear(){
  setcounter(0)
}

// let counter = 15
return(
  <>
 <Chai/>

<h1>number shower:{counter} </h1>
 <button onClick={add} >add :{counter} </button>
 <br />
 <button onClick={remove}>remove {counter}: </button>
<br />
<button onClick={clear}>clean</button>

  </>
)
}

export default App
