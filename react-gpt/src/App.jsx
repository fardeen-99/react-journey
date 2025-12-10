import { useEffect, useState } from "react"
import "./App.css"
import { Api } from "./axios"
import { Answer } from "./answer"
const App=()=>{


  const[question,setquestion]=useState("")
  const[ans,setans]=useState([])
  let asking=async()=>{


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
let points = datastring.split(/\n+|• |- |\* |\:\s+/);
          points=points.map((item)=>item.trim())
          // setans(points)
          setans((prev)=>[...prev,{type:"q",text:question},{type:"a",text:points}])        
        } catch (err) {
          console.log(err.response?.data || err);
        }
        console.log(ans);
        
        setquestion("")
        
}
return(
  <>
 <main>
  <aside>

  </aside>
  <section>
    <nav><h1>welcome to fardeen's Ai</h1></nav>
    <article>
      <ul>
{}
      {/* {ans.map((ele,index)=>(



        <li key={index+Math.random()}>

          <Answer ele={ele} index={index} total={question.length}/>
        </li>
      ))
    } */}
    </ul>
    </article>
<div className="inp"><input type="text"  value={question} onChange={(e)=>setquestion(e.target.value)}    placeholder="Ask Something..." /><p onClick={asking} >ASK</p></div>
  </section>
  </main> 
  </>
)
}
export default App