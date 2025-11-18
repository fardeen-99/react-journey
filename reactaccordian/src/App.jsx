import { useEffect, useState } from "react"
import faq from "./comp/faq.json"
import './App.css'
import { Accord } from "./accord"
const App=()=>{

const [data,setdata]=useState([])
const[open,setopen]=useState(false)

useEffect(()=>{

  setdata(faq)

},[])

const toggle=(id)=>{
  setopen((prev)=>(prev===id?false:id))

}
return(
<>
<h1>the accordian</h1>

<ul>
  {
  data.map((ele)=>{
    return(
        <li key={ele.id}>

    <Accord ele={ele} open={open===ele.id}
toggle={()=>toggle(ele.id)}    />
        </li>
    )

  })
  }
</ul>


</>
)

}
export default App