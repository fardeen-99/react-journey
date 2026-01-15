import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";

const Collection = () => {

const[data,setdata]=useState(JSON.parse(localStorage.getItem("collection"))||[])


console.log(data);

const deleter=(item)=>{
    setdata((prev)=>prev.filter(task=>task.id!==item.id))
}

useEffect(()=>{
localStorage.setItem("collection",JSON.stringify(data))
},[data])

  return (
    <>
    <div className=' grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] p-6 w-[100%]'>

    {data.map((item,index)=>{
        return(
        
      <div className='h-[250px] w-[100%]  rounded overflow-hidden relative self-start' key={index}>
<a href={item.url}>
     {item.type==="photos"?<img loading='lazy' className='h-full w-full object-cover object-center' src={item.src} alt={item.title} />:""}
     {item.type==="video"?<video preload='metadata' className='h-full w-full object-cover object-center' src={item.src} muted autoPlay loop ></video>:""}
     {item.type==="gif"?<img loading='lazy' className='h-full w-full object-cover object-center' src={item.src} alt={item.title} />:""}

</a>

<div className=' w-full px-4 py-3 absolute bottom-0 text-white' id='bottom'>
<div className='flex justify-between gap-3  items-center'>

<h2 className=' font-semibold capitalize overflow-hidden flex items-center h-14' >{item.title}</h2>

<button onClick={()=>deleter(item)} className='p-2 cursor-pointer border-none rounded  self-center text-2xl rounded-full bg-red-700' ><FaXmark  />
</button>
</div>

</div>
      </div>


        )
    })}
    
    </div>
    </>
  )
}

export default Collection