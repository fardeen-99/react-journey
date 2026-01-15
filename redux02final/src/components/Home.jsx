import React from 'react'
import Tab from "../components/tab"
import Search from "../components/search"
import Result from "../components/Result"
import { useSelector } from 'react-redux'
export const Home = () => {

const query=useSelector((store)=>store.content.query)
console.log(query.length);

if(query.length===0) return <Search/>
  return (
  <div className='min-h-screen w-full bg-gray-900 flex flex-col'>
  <Search/>
  <Tab/>
<Result/>
    </div>
  )
}
