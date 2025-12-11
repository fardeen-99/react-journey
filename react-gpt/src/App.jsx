import { useEffect, useRef, useState } from "react"
import "./App.css"
import { Api } from "./axios"
import { Answer } from "./answer"
const App=()=>{


  const[question,setquestion]=useState("")
  const[ans,setans]=useState([])
  let asking=async()=>{
 if(question==="")return

  const payload = {
  model: "llama-3.1-8b-instant",
  messages: [
    { role: "user", content: question }
  ]
};
  
    
    
        try {
          const res = await Api.post("/chat/completions", payload);
          console.log(res.data.choices[0].message.content);
          
          let datastring=res.data.choices[0].message.content  // correct
let points = datastring.split(/\n+|• |- |\* |\\s+/);
          points=points.map((item)=>item.trim())
          // setans(points)
          setans((prev)=>[...prev,{type:"q",text:question},{type:"a",text:points}])        
        } catch (err) {
          console.log(err.response?.data || err);
        }
        console.log(ans);
        
        setquestion("")
        
}
const bottomRef=useRef(null)

useEffect(() => {
  bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [ans]);
return(
  <>
 <main>
  <aside>

  </aside>
  <section>
    <nav><h1>welcome to fardeen's Ai</h1></nav>
    <article>
      <ul>
        
        {ans.map((ans,index)=>{
          return(
            
            ans.type==="q"?<li ref={bottomRef} className="qusetion" key={index+Math.random()}><Answer ele={ans.text} index={index} total={1}/></li>:<ul className="ansul"> {ans.text.map((item)=>{
              return(
                
               <li className="answer" key={index+Math.random() }><Answer ele={item} index={index} total={ans.text.length} /></li>
              )
            }
            ) }
               </ul> 

          )
        })}
 

    </ul>

    </article>
<div className="inp"><input type="text"  value={question} onChange={(e)=>setquestion(e.target.value)}    placeholder="Ask Something..." /><p onClick={asking} >ASK</p></div>
  </section>
  </main> 
  </>
)
}
export default App