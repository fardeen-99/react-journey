import { useEffect, useState } from "react";

export const Answer=({ele,index,total})=>{

const[head,sethead]=useState(false)
const[answer,setanswer]=useState(ele)
useEffect(()=>{

    if(check(ele)){
        sethead(true)
        let replaced=replace(ele)
        setanswer(replaced)
    }else{
        setanswer(ele)
        sethead(false)
    }
    console.log(answer)
},[ele])

function check(ele){
  return /\*\*/.test(ele);
}
// console.log(check(ele))
function replace(ele) {
  return ele
    .replace(/\*\*/g, "")
    .replace(/#+\s*/g, "");  // removes ###, ##, # + space
}
    return(
<>
{index===0 && total>1?<span style={{color:"yellow"}}>{answer}</span>:head?<div className="bold">{answer}</div>:<div className="superman">{answer}</div>}


</>
    )
}