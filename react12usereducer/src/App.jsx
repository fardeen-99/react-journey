
import { useContext } from 'react'
import './App.css'
import { Context } from './context'

function App() {
 
const{state,dispatch,submitu}=useContext(Context)
  return (
    <>

<form onSubmit={submitu}>
  <label htmlFor="">username</label>
  <input type="text"
  value={state.name}
  onChange={(e)=>
    dispatch({type:"handleinput", value:e.target.value ,field:"name"})
    
  }
  required
  
  placeholder='name'
  />
  <label htmlFor="">password</label>
  <input type="text"
  value={state.password}
  onChange={(e)=>
    dispatch({type:"handleinput",value:e.target.value,field:"password"})
    
  }
  placeholder='password'
  />
  <label htmlFor="">e-mail</label>
  <input type="text"
  value={state.email}
  onChange={(e)=>
dispatch({type:"handleinput",value:e.target.value,field:"email"})

  }
  placeholder='e-mail'
  />

  <button>submit</button>
</form>



    </>
  )
}

export default App
