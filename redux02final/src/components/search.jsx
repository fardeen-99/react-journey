import { useState } from "react"
import {useDispatch} from 'react-redux'
import { setQuery } from "../features/searchslice"
const Search = () => {

    const [text, settext] = useState("")
let dispatch=useDispatch()

 

const submithandler=(e)=>{
    e.preventDefault()
   dispatch(setQuery(text))  
   settext("")

}

  return (
    <div>
        <form className='w-ful p-10 flex gap-5 text-white bg-gray-800' onSubmit={(e)=>submithandler(e)}>
<input type="text" placeholder='search here....'   value={text} onChange={(e)=>settext(e.target.value)} className='w-full outline-0 rounded border-2 border-white py-3 px-6 text-white font-semibold font-xl'  />
<button className='px-6 py-3 border-2 border-white rounded active:scale-95 font-xl font-semibold' >search</button>
        </form>


    </div>
  )
}

export default Search