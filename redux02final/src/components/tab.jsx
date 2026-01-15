import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../features/searchslice'



const Tab = () => {
const tab=["photos","videos","gif"]
let dispatch=useDispatch()
let activetab=useSelector((state)=>state.content.activeTab)

  return (
    <>
<ul className='flex gap-5 w-full text-white font-semibold font-xl p-5   '>
    {tab.map((ele,i)=>{
        return(
<li key={i} className={`${activetab===ele?"bg-blue-500":'bg-gray-700'} px-6 py-3  rounded transition`} onClick={()=>{dispatch(setActiveTabs(ele))}} >{ele}</li>
        )
    })}
</ul>
    </>
  )
}

export default Tab