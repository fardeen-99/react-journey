import { MdDeleteOutline,MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from "react"
import "./App.css"
import { Commet } from "react-loading-indicators"
import { Api } from "./axios"
import { Answer } from "./answer"
import { HiStar } from "react-icons/hi";
import { ImCross } from "react-icons/im";




const App=()=>{

const[open,setopen]=useState(false)
  const[question,setquestion]=useState("")
  const[option,setoption]=useState("dark")
  const[ans,setans]=useState([])
  const[save,setsave]=useState(JSON.parse(localStorage.getItem("saver"))||[])
  const[load,setload]=useState(false)
  // const[select,setselect]=useState([])
  let asking=async(custom)=>{
    let trimmed=(question || custom).trim()
 if(!trimmed) {
  setquestion('')
  return
 }
 setload(true)


 let datahai=custom?custom:question
  const payload = {
  model: "llama-3.1-8b-instant",
  messages: [
    { role: "user", content: datahai}
  ]
};

if(question){

  if(localStorage.getItem("saver")){
    let history=JSON.parse(localStorage.getItem("saver"))
  history=[question,...history]
  
  history=history.map((e)=>e.charAt(0).toUpperCase()+ e.slice(1)
  )
  
  history= [...new Set(history)]
  history=history.slice(0,15)
  localStorage.setItem("saver",JSON.stringify(history))
  
  setsave(history)
  
  }else{
    localStorage.setItem("saver",JSON.stringify([question.charAt(0).toUpperCase()+ question.slice(1)]))
  setsave([question.charAt(0).toUpperCase()+ question.slice(1)])
  }
}

  // console.log(save)


    
        try {
          const res = await Api.post("/chat/completions",payload);
          console.log(res.data.choices[0].message.content);
          
          let datastring=res.data.choices[0].message.content  // correct
let points = datastring.split(/\n+|• |- |\* |\\s+/);
          points=points.map((item)=>item.trim())
          // setans(points)
          setans((prev)=>[...prev,{type:"q",text:custom?custom:question},{type:"a",text:points}])        
 
          setload(false)
        } catch (err) {
          console.log(err.response?.data || err);
        }
        // console.log(ans);
        
    setquestion("")
        
}
const bottomRef=useRef(null)

useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [ans]);

const key=(dets)=>{
  if(dets.key==="Enter"){
    asking()
  }

}
const dlt=(id)=>{
  // let wow=setsave((prev)=>{
  //   return prev.filter((_,index)=>index!==id)
  // })
let wow=[...save].filter((_,i)=>i!==id)
setsave(wow)
  localStorage.setItem("saver",JSON.stringify(wow))
}

const choose=(ele)=>{
  // setselect(ele)
  asking(ele)
  
}

const deleteall=()=>{
setsave([])
localStorage.clear()
}


const menu=()=>{
  setopen((prev)=>!prev)
}
return(
  <>
 <main className={option}>
  <aside  className={` ${open?"kannu":""} ${option==="light"?"lightaside":''}`}>
    <h2 style={{textAlign:"center",fontWeight:600}}>Recent History <MdDelete onClick={deleteall} className="bigdlt" />
    <ImCross className={`cross ${option}-cross`} onClick={()=>setopen(false)} />



</h2>
<ul className="history">

  {save.map((ele,index)=>{
    return(
        
<li className={option==="light"?"lightu":""} key={index}><p onClick={()=>{choose(ele);setopen(false)}}  className="trunc">{ele}</p><span className="dlt" onClick={()=>dlt(index)}><MdDeleteOutline onClick={()=>setopen(true)} /></span>

</li>
      


    )
  })}
</ul>
<select value={option} onChange={(e)=>setoption(e.target.value)} >
  <option value="dark">dark</option>
  <option value="light">light</option>
</select>
  </aside>
  <section className={option==="light"?"lightsection":''}>
    <nav><h1 className="heading">welcome to fardeen's Ai 
</h1> <p onClick={menu} ><HiStar style={{color:"white",fontSize:"1.5rem"}} /> <br />history</p>
</nav>
{ load?<div className="spinner"><Commet color="#b61e9f" size="small" text="" textColor="" /></div>:<></>
}

  

    <article>
      <ul className="mainul">
        
        {ans.map((ans,index)=>{
          return(
            
            ans.type==="q"?<li ref={bottomRef} className={`qusetion ${option==="light"?"lightquestion":""}`} key={index+Math.random()}><Answer ele={ans.text} index={index} total={1}/></li>:<ul className="ansul"> {ans.text.map((item)=>{
              return(
                
               <li className={`answer ${option==="light"?"lightli":""}`}  key={index+Math.random()  }><Answer ele={item} index={index} total={ans.text.length} option={option} /></li>
              )
            }
            ) }
               </ul> 

          )
        })}
 

    </ul>

    </article>
<div className={`inp ${option==="light"?"sinp":""}`}><input  className={`${option==="light"?"lightli":""}`}  onKeyDown={key} type="text"  value={question} onChange={(e)=>setquestion(e.target.value)}  placeholder="Ask Something..." /><p className={`${option}-ask`} onClick={asking} >ASK</p></div>
  </section>
  </main> 
  </>
)
}
export default App