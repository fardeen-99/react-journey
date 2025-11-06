import { children,createContext ,useState,useEffect} from "react";

export let Context = createContext()


export const Provider=({children})=>{


      const [pokemon, setpokemon] = useState([])
  const [load, setload] = useState(false)
  const [error, seterror] = useState("")
  const [search, setsearch] = useState('')

const API = "https://pokeapi.co/api/v2/pokemon?limit=160";
let Card =async()=>{
try{
let res= await fetch(API)
let data= await res.json()
let result=(data.results)

let prom=result.map(async(ele)=>{
// console.log(ele)
let fat= await fetch(ele.url)
let jas=await fat.json()
return jas
})

let akhir= await Promise.all(prom)
console.log(akhir)
setpokemon(akhir)
setload(true)
} catch(error){
  console.log(error)
  setload(true)
  seterror(error)
}
}
const searchdata = pokemon.filter((pokemons)=>{

return  pokemons.name.toLowerCase().includes(search.toLowerCase())
})

useEffect(()=>{
  Card()
},[])

if(!load){
  return <div><h1>loading</h1></div>
}
if(error){
 return <div><h1>{error.message}</h1></div>
}

return(
<Context.Provider value={{pokemon,search,setsearch,searchdata}}>{children}</Context.Provider>

)
}