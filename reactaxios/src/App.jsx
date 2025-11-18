import { useEffect } from 'react'
import './App.css'
import { Dltapi, Getapi, Postapi, Putapi } from './services/axios'
import { useState } from 'react'


function App() {
  const [data,setdata]=useState([])
  const[edit,setedit]=useState({})
  
  const getdataapi=async()=>{
  let res=await Getapi()
  if(res.status===200){

setdata(res.data)



  }


  }



  let isempty= Object.keys(edit).length===0
  console.log(isempty);
  
// console.log(data)
useEffect(()=>{
getdataapi()
},[])

const handledlt=async(id)=>{
  try {
    
    let resp=await Dltapi(id)
    console.log(resp)
    
    setdata((prev)=>prev.filter((todo)=>{
    return(
      todo.id!==id
    )
    
    }))
  } catch (error) {
    console.log(error)
  }

}

const[form,setform]=useState({
title:"",
body:""

})
const handleform=(e)=>{

let{name,value}=e.target


setform((prev)=>({...prev,[name]:value}))


}

let getpostapi=async()=>{
  try {
    let res= await Postapi(form)
if(res.status===201){
  setdata((prev)=>[...prev,res.data])
  setform({title:"",body:""})
}    
    
  } catch (error) {
    console.log(error)
  }
}
// console.log(data)


const editkaro=async()=>{
let res=await Putapi(edit.id,form)
if(res.status===200){

setdata((prev)=>{

return(
prev.map((item)=>
item.id===res.data.id?res.data:item

)


)

})

setform({title:"",body:""})
setedit({})


}


}


const submit=(e)=>{
 e.preventDefault()

  if (!form.title.trim() || !form.body.trim()) return;

const action=e.nativeEvent.submitter.value
if(action==="add"){
  
  getpostapi()
}
else if(action==="edit"){

editkaro()

}
 



}


const handledit=(ele)=>{

setedit(ele)




}
useEffect(()=>{

edit && setform({

title:edit.title || "",
body:edit.body || ""

})

},[edit])

  return (
    <>
<main>


<form onSubmit={submit}>

<input type="text"
placeholder='write...'
name="title"
value={form.title}
onChange={(e)=>handleform(e)}
/>
<input type="text"
placeholder='about...'
name="body"
value={form.body}
onChange={(e)=>handleform(e)}
/>
<button value={isempty?"add":"edit"}>{isempty?"add":"edit"}</button>


</form>

  <ol>
{data.map((ele)=>{
  const{id,body,title}=ele
return(
<li key={id}>

<p className="f">{title}</p>
<p className="s">{body}</p>
<button onClick={()=>handledit(ele) }>edit</button>
<button onClick={()=>handledlt(id)} >delete</button>

</li>


)



})}

  </ol>
</main>

    </>
  )
}

export default App
