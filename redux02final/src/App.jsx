import { useEffect } from "react"
import { unsplash } from "./api/api"
import Search from "./components/search"
import { useSelector } from "react-redux"
import Tab from "./components/tab"
import Result from "./components/Result"

const App = () => {
let abbu=useSelector((store)=>store.content)
console.log(abbu);

  return (
    <div className='min-h-screen w-full bg-gray-900 flex flex-col'>
  <Search />
  <Tab/>
<Result/>
    </div>
  )
}

export default App