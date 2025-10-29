import { useState,useEffect } from 'react'

import { IoMdCheckmark 
} from "react-icons/io";
import { MdDelete } from "react-icons/md";

import './App.css'

function App() {
  const [input, setinput] = useState("")
  const [task, settask] = useState([])
const[date,setdate]=useState("")
const inputchange =(value)=>{
  setinput(value)

}
const formsubmit =(e)=>{
  e.preventDefault()
   if(input==="")return;
if(task.includes(input)){
  
  
  setinput("")
  return
};

settask((prev)=>
  [...prev,input]
)

setinput("")


}
useEffect(()=>{

  setInterval(() => {
    
    let date=new Date()
    let pro=date.toLocaleDateString()
    let time=date.toLocaleTimeString()
    setdate(`${pro}-${time}`)
  }, 1000);
},[])

const kato=(value)=>{
  settask((prev)=>prev.filter((task)=>task!==value))

}
  return (
    <>
    <div className="cont">
      <h1>my-todo-app</h1>
      <div className="date">{date}</div>
      <form  onSubmit={formsubmit} >
        <input type="text"
        placeholder='type....'
        value={input}
        onChange={(e)=>inputchange(e.target.value)}
        />


        <button >add</button>
      </form>
<div className="list">
<ul>
 {task.map((ele,index)=>{
  return(
<li key={index}>
<span>{ele}</span>
<IoMdCheckmark style={{color:'green',fontSize:'20px'} } />
<MdDelete style={{color:'red',fontSize:'20px'}}  onClick={()=>kato(ele)}/>

</li>
  )
 })}
</ul>
<button className='btn' onClick={()=>{
  return(
  settask([])
  )
}}>clear</button>

</div>


    </div>


    </>
  )
}

export default App
