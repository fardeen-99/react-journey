import { useEffect, useState } from "react"

const App = () => {

// const [name, setname] = useState("")
// const [image, setimage] = useState("")
// const [role, setrole] = useState("")
// const [disc, setdisc] = useState("")

const [edit, setedit] = useState({})

let isempty=Object.keys(edit).length===0


const [detail, setdetail] = useState(
  {
    name:"",
    image:"",
    role:"",
    disc:""
  }

)

const [task, settask] = useState(() => {
  const saved = localStorage.getItem("saver")
  return saved ? JSON.parse(saved) : []
})
const handle=(e)=>{
const {name,value} = e.target

setdetail({...detail,[name]:value})

}
const submit=(e)=>{
  
  e.preventDefault()
  
  if(!detail.name || !detail.image || !detail.role || !detail.disc) return
  
  const action = e.nativeEvent.submitter.value


if(action==="add"){
  
  settask((prev)=>[...prev,detail])
}
if(action==="edit"){

  settask((prev)=>{
    return(
 prev.map((todo,i)=>i===edit.id?{...detail}:todo)
    )
  })

  setedit({})
}

setdetail(
  {
    name:"",
    image:"",
    role:"",
    disc:""
  }
)

// setname("")
// setimage("")
// setrole("")
// setdisc("")


}
useEffect(() => {
  localStorage.setItem("saver", JSON.stringify(task))
}, [task])
const dlt=(id)=>{

const alltask=[...task]
alltask.splice(id,1)
settask(alltask)

localStorage.setItem("saver",JSON.stringify(alltask))



}
const editing=(id)=>{

  let edittask =task[id]
 setdetail(edittask)
 setedit({edittask,id})
  

}
console.log(edit)
  return (
    <>
    <form onSubmit={submit} >
    <div className='w-[100%] py-4 flex flex-wrap gap-3 justify-center'>

<input className=' border-2  border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your image' value={detail.image} name="image" onChange={handle} />
<input className='border-2  border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your name' value={detail.name}  name="name" onChange={handle}/>
<input className=' border-2  border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your role' value={detail.role} name="role" onChange={handle}/>
<input className='border-2  border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your description' value={detail.disc} name="disc" onChange={handle}   />
<button className="capitalize font-bold w-[83%] border-0 bg-lime-500 py-3 rounded-xl active:scale-95"   type="submit" value={isempty?"add":"edit"} >{isempty?"add":"edit"}</button>

    </div>
</form>
<div className=" flex w-[80%] m-auto gap-8 flex-wrap">


{task.map((ele, idx) => {
  return (
    <div
      key={idx}
      className="w-[20%] h-[50vh] bg-amber-50 mt-6 rounded-2xl flex flex-col items-center p-3"
    >
      {/* Image */}
      <div className="w-28 h-28 rounded-full shrink-0">
        <img
          className="h-full w-full rounded-full object-cover"
          src={ele.image}
          alt=""
        />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 mt-3 w-full overflow-y-auto no-scrollbar flex flex-col items-center gap-2">
        <h2 className="font-medium text-2xl capitalize text-sky-600 text-center">
          {ele.name}
        </h2>

        <h3 className="text-xl uppercase font-bold text-amber-800 text-center">
          {ele.role}
        </h3>

        <p className="capitalize text-gray-600 font-medium text-center break-words">
          {ele.disc}
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full flex justify-between mt-3 shrink-0">
        <button
          className="py-2 font-semibold  active:scale-95 w-[50%] rounded-xl bg-red-600 uppercase"
          onClick={() => dlt(idx)}
        >
          remove
        </button>

        <button className="py-2 font-semibold active:scale-95 w-[40%] rounded-lg bg-gray-700 uppercase"  onClick={()=>editing(idx)} >
          edit
        </button>
      </div>
    </div>
  )
})}



</div>
    </>
  )
}

export default App