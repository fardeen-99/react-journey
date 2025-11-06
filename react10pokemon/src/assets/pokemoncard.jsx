import { useContext } from "react"
import { Context } from "../context"

export const Pokemoncard=()=>{
const {searchdata}=useContext(Context)
return(
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
)


}