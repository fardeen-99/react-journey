import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [pokemon, setpokemon] = useState([])
  const [load, setload] = useState(false)
  const [error, seterror] = useState("")
  const [search, setsearch] = useState('')

const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
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


      
/* <h1 key={ele.id} >{ele.name}</h1> */
return (
  <>
    <h1 className="title">Pokémon's World</h1>

    <input
      type="text"
      className="search"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(e) => setsearch(e.target.value)}
    />

    <div className="allcards">
      {searchdata.map((ele) => (
        <div className="card" key={ele.id}>
          <div className="card-img">
            <img
              src={ele.sprites.other.dream_world.front_default}
              alt={ele.name}
            />
          </div>

          <h2 className="heading">{ele.name}</h2>

          <div className="type">{ele.types.map((e) => e.type.name).join(", ")}</div>

          <div className="stats">
            <div><b>Height:</b> {ele.height}</div>
            <div><b>Weight:</b> {ele.weight}</div>
            <div><b>Speed:</b> {ele.stats[5].base_stat}</div>
            <div><b>Experience:</b> {ele.base_experience}</div>
            <div><b>Attack:</b> {ele.stats[1].base_stat}</div>
            <div><b>Ability:</b> {ele.abilities.map((e) => e.ability.name).slice(0,1).join(", ")}</div>
          </div>
        </div>
      ))}
    </div>
  </>
)


      
}

export default App
