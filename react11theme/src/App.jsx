
// import { use } from 'react'
import './App.css'
import { Context } from './context'
import { useContext } from 'react'

function App() {

let{theme, handletheme}=useContext(Context)
  return (
    <>
    <div className={`co ${theme==="dark"? "black":"light" } `}  >
<h1 className={`${theme==="dark"? "black":"light"}`}>hello my name is fardeen</h1>
<p>i am 20 years old web developer</p>
<button onClick={handletheme}>{theme==="dark"?"switch to light mode":"switch to dark mode"}</button>
</div>
    </>
  )
}

export default App
