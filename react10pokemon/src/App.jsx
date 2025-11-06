// import { useContext } from 'react'

import './App.css'
// import { Context} from './context'
import { Input } from './input'
import { Pokemoncard } from './assets/pokemoncard'

function App() {

  // const {searchdata}=useContext(Context)    
/* <h1 key={ele.id} >{ele.name}</h1> */
return (
  <>
  
<h1 className="title">Pokémon's World</h1>

  
  <Input />
<Pokemoncard />
   
  </>
)


      
}

export default App
