import { useState } from "react"

const App = () => {

const [name, setname] = useState("")
const [image, setimage] = useState("")
const [role, setrole] = useState("")
const [disc, setdisc] = useState("")

const [task, settask] = useState([])

const submit=(e)=>{
e.preventDefault()

settask((prev)=>[...prev,{name,image,role,disc}])


setname("")
setimage("")
setrole("")
setdisc("")


}
const dlt=(id)=>{

const alltask=[...task]
alltask.splice(id,1)
settask(alltask)



}
console.log(task);
  return (
    <>
    <div className='w-[100%] py-4 flex flex-wrap gap-3 justify-center'>

<input className=' border-2 border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your image' value={image} onChange={(e)=>setimage(e.target.value)} />
<input className='border-2 border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your name' value={name} onChange={(e)=>setname(e.target.value)} />
<input className=' border-2 border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your role' value={role} onChange={(e)=>setrole(e.target.value)}/>
<input className='border-2 border-amber-50 py-3 px-6 text-3xl font-medium w-[40%] ' type="text" placeholder='your description' value={disc}  onChange={(e)=>setdisc(e.target.value)} />
<button className="capitalize w-[83%] border-0 bg-lime-500 py-3 rounded-xl active:scale-95"  onClick={submit}>add</button>

    </div>

<div className=" flex w-[80%] m-auto gap-8 flex-wrap">


{task.map((ele,idx)=>{
  return(
<div key={idx} className=" w-[20%]   bg-amber-50 mt-6 rounded-2xl flex flex-col items-center justify-around p-3">
<div className="w-30 h-30 rounded-full "> <img className="h-full w-full rounded-full object-cover object-center" src={ele.image} alt="" />  </div>
<h2 className="font-medium text-2xl capitalize text-sky-600 mt-4" >{ele.name}</h2>
<h3 className="text-[2rem] uppercase font-bold text-amber-800" >{ele.role}</h3>
<h4 className="capitalize text-gray-600 font-medium text-center ">{ele.disc}</h4>
<div className="w-full flex justify-between ">
<button className="py-2 active:scale-95 w-[40%] rounded-xl bg-red-600 uppercase mt-4" onClick={()=>dlt(idx)} >remove</button>
<button className="py-2 active:scale-95 w-[40%] rounded-lg bg-gray-700 uppercase mt-4">edit</button>

</div>

</div>
  )
})}


</div>
    </>
  )
}

export default App