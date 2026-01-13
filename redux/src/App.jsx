 import {useDispatch,useSelector} from 'react-redux'
import { decrement, increment, manchala } from "./assets/store/slice"
import { useState } from 'react'




const App = () => {
const [num, setnum] = useState(5)

  const dispatch= useDispatch()
const count= useSelector((state=>state.counter.value))
  return (
    <>
<p>{count}</p>
<button onClick={()=>dispatch(increment())}>inc</button>
<button onClick={()=>dispatch(decrement())}>decre</button>
<input type="number" value={num} onChange={(e)=>setnum(
 Number(e.target.value))} />
<button onClick={()=>dispatch(manchala(num))}>increment by {num}</button>
    </>
  )
}

export default App