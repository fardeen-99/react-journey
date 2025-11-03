import { useState ,useEffect} from "react"



export function Counter(){
    let local = JSON.parse(localStorage.getItem("conter"));
const[count,setcount]=useState(local.count || 0)
const [input,setinput]=useState(local.input || "")
  const [task, settask] = useState(local.task || [])
useEffect(() => {
  localStorage.setItem("conter", JSON.stringify({ task, count, input }));
}, [task, count, input]);

let next=Number(count+(1*input))
let back=count-Number((1*input))
const increment=()=>{
    check()
    if(next<100){
        if(input.trim()!==""){
        setcount(next)
        

        settask((prev)=>[...prev,`+${input}`])
        }
  }
}
let check=()=>{
    if(isNaN(input) || input.trim()===""){
    return setinput("")
}

}

const decreament=()=>{
    check()
   if(back>0){
    setcount(back)
    settask((prev)=>[...prev,`-${input}`])

   }
}
const number=(value)=>{
    setinput(value)
    console.log(value)
}


const gayab=()=>{
    setcount(0)
    setinput("")
    settask([])
   
}


return(



<>

<h1>counter app</h1>
<p>{count}</p>
<input type="text"

placeholder="write amount"
value={input}
onChange={(e)=>number(e.target.value)}
/>

<button onClick={increment}>increment</button>
<button onClick={decreament}>decreament</button>
<button
onClick={gayab}>reset</button>
<ul>
{task.map((ele,index)=>(
<li key={index}>
{ele}
</li>
))}
</ul>

</>

    )

}