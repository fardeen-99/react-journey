import React from 'react'

const Box = ({data,liker,disliker}) => {
const {username,age,like,profession,id}=data

  return (
    <div className='h-80  w-60 rounded-2xl bg-amber-200 font-semibold'>
        <h1>{username}</h1>
        <p>{age}</p>
        <div className='flex gap-2 '>
        <button
        onClick={()=>disliker(id)}
        className='px-6 py-2 rounded-2xl bg-red-500 text-shadow-emerald-50'>dislike</button>
        <p>{like}</p>
        <button  
        onClick={()=>liker(id)}
        
        className='px-6 py-2 rounded-2xl bg-red-500 text-shadow-emerald-50'>like</button>

        </div>



    </div>
  )
}

export default Box