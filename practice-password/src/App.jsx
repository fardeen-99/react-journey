import { useCallback, useEffect, useRef, useState } from "react"

const App=()=>{
  let[val,setval]=useState(8)
  let[on,seton]=useState(false)
  let [ans,setans]=useState("")

const kalu=()=>{
  seton((prev)=>!prev)
}

function abcd(){
let password=""
let str="ABCDEFGHIJKLOMNOPQRSTUVWXYZabcdefghijklomnopqrstuvwxyz"

if(on){
  str+="0123456789"
}

for(let i=0;i<=val;i++){

let lalu=Math.floor(Math.random()*str.length+1)

let aloo=str.charAt(lalu)


password+=aloo
}
console.log(password)
setans(password)
}
useEffect(()=>{
  abcd()
},[val,on])

const monu=(e)=>{
  setval(e.target.value)
}
const chor=useRef(null)
let bhalu=useCallback(()=>{
chor.current.select()
window.navigator.clipboard.writeText(ans)
},[ans])
return(
  <>
  <div className="first">
<input type="type" value={ans} ref={chor} />
<button onClick={bhalu}>copy</button>
  </div>
  <div className="sec">
    <input type="range"  max={100} min={4} defaultValue={val} onChange={monu} />
    <input type="checkbox" value={on} onClick={kalu} />
  </div>
  </>
)
}
export default App