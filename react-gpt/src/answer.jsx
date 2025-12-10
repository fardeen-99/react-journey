import { useEffect, useState } from "react";

export const Answer=({ele,index,total})=>{

const[head,sethead]=useState(false)
const[answer,setanswer]=useState(ele)
useEffect(()=>{

    if(check(ele)){
        sethead(true)
        setanswer(replace(ele))
    }
    console.log(answer)
},[])

function check(ele){
  return /\*\*/.test(ele);
}
// console.log(check(ele))
function replace(ele){
    return ele.replace(/\*\*/g, "")
}
    return(
<>
{index===0 &&total>1?<span>{ele}</span>:head && head?<div className="bold">{answer}</div>:<div>{answer}</div>}


</>
    )
}