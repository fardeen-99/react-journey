import React, { useState } from 'react'
import Box from './Box'

const Card = () => {

const[data,setdata]=useState([
{
    username:"fardeen",
    age:20,
    profession:"developer"
    ,like:0
    ,id:1
},
{
    
    username:"fardeen",
    age:20,
    profession:"developer"
    ,like:0
    ,id:2
}
    ]
)

const liker=(id)=>{
setdata((prev)=>prev.map((item)=>{
    return (
        item.id===id?{...item,like:item.like+1}:item
    )
}))
}
const disliker=(id)=>{
setdata((prev)=>prev.map((item)=>{
    return (
        item.id===id?{...item,like:item.like-1}:item
    )
}))
}
// const disliker=(id)=>{
// setdata((prev)=>prev.id===id?prev.like-1:prev.like)
// }

  return (
   <>
   <div className='flex gap-10 p-10 text-xl w-full bg-black'>

   {
       
       data?.map((item)=>{
           return (
               <div
               
               key={item.id}>

            <Box data={item} liker={liker} disliker={disliker} />
            </div>
      )  // <h1>{item.username}</h1>
    })
}
    </div>
   
   </>
  )
}

export default Card