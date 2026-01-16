import { useState } from "react"
import {useDispatch} from 'react-redux'
import { setQuery } from "../features/searchslice"
const Search = ({tabref}) => {

    const [text, settext] = useState("")
let dispatch=useDispatch()

 

const submithandler=(e)=>{
  e.preventDefault()
  if(!text) return
   dispatch(setQuery(text))  
   settext("")

}

  return (
    <>
     <form
  ref={tabref}
  className="
    w-full px-6 py-8
    flex gap-4 items-center
    bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
    border-b border-gray-700
    
  "
  onSubmit={(e)=>submithandler(e)}
>
  <input
    type="text"
    placeholder="Search photos, videos, gifs..."
    value={text}
    onChange={(e)=>settext(e.target.value)}
    className="
      w-full
      bg-gray-900
      text-white
      placeholder-gray-400
      px-6 py-3
      rounded-full
      border border-gray-600
      outline-none
      focus:border-blue-500
      focus:ring-2 focus:ring-blue-500/30
      transition-all duration-200
      text-lg
    "
  />

  <button
    type="submit"
    className="
      px-8 py-3
      rounded-full
      bg-blue-600
      hover:bg-blue-500
      active:scale-95
      text-white
      font-semibold
      shadow-lg shadow-blue-600/30
      transition-all duration-200
      whitespace-nowrap
    "
  >
    Search
  </button>
</form>



    </>
  )
}

export default Search