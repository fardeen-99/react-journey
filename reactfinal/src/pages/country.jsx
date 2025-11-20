import { useEffect, useState, useTransition } from "react"
import { Getapi } from "../axios"
import {Atom} from 'react-loading-indicators'

import{NavLink, useNavigate}from"react-router-dom"
export const Country=()=>{
    const[country,setcountry]=useState([])
    const[search,setsearch]=useState("")
    const[filter,setfilter]=useState("All")
  const [isPending, startTransition] = useTransition();
  
  const popat=async()=>{
  
      let res=await Getapi()
      startTransition(() => {
          setcountry(res.data);
          console.log(country)
        });
      }
useEffect(()=>{
    
popat()
    
},[])

const searchu=country.filter((item)=>{
   return item.name.common.toLowerCase().includes(search.toLowerCase()
)

})

const filteru=searchu.filter((item)=>{

    if(filter==="All") return true
     return item.region===filter
})

const chalo= searchu && filteru





console.log(country)
if(isPending){
    return(
        <Atom color="#32cd32" size="medium" text="" textColor="" />

    )
}
let navu=useNavigate()


const handlenum=(value)=>{
if(value==="asc"){
setcountry((prev)=>[...prev].sort((a,b)=> a.name.common.localeCompare(b.name.common)))

}else if(value==="desc"){
    setcountry((prev)=>[...prev].sort((a,b)=>b.name.common.localeCompare(a.name.common)))

}

}

return(
    <>


<div className="akhir">
    <input className="motu"type="text"
    placeholder="search.."
    name="search"
    value={search}
    onChange={(e)=>setsearch(()=>e.target.value)} />


<button className="gazi"onClick={()=>handlenum("asc")}>ascending</button>
<button onClick={()=>handlenum("desc")} className="gazi">descending</button>


<select name="" id="" value={filter} onChange={(e)=>setfilter(()=>e.target.value)}>
<option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option></select>

</div>


    <div className="cover">
    
        {
            chalo.map((ele,index)=>{
return(
<div className="olo" key={index}>
    <div className="image"><img src={ele.flags.svg} alt="" /></div>
    <h2 style={{textTransform:"uppercase", color:"wheat"}}>{ele.name.common.length > 10 ?
    ele.name.common.slice(0,10) +"..."
    :
    ele.name.common}</h2>
    <p>population:{ele.population.toLocaleString()}</p>
    <p>region:{ele.region}</p>
    <p>capital:{ele.capital}</p>

<button className="btn-b"  onClick={()=>navu(`/country/${ele.name.common}`)}>read more</button>

</div>
)
            })
        }
        
    </div>
    </>
)

}