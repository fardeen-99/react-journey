import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaXmark } from "react-icons/fa6";
import toast,{Toaster} from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { removecollection } from '../features/collectionslice';
const Collection = () => {

// const[data,setdata]=useState(JSON.parse(localStorage.getItem("collection"))||[])
const output=useSelector(store=>store.collect.value)

const dispatch=useDispatch()

const deleter=(item)=>{
  toast.success('removed', {
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
  },
});
    dispatch(removecollection(item))
}

// useEffect(()=>{
// localStorage.setItem("collection",JSON.stringify(data))
// },[data])

  return (
    <>
    <Toaster
  position="top-right"
  reverseOrder={true}
/>
<div
  className="
    grid gap-6 p-6 w-full
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
  "
>

    {output && output.map((item,index)=>{
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