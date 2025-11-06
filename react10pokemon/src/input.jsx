import { useContext } from "react"
import { Context } from "./context"

export const Input=()=>{

let {setsearch,search} =useContext(Context);
return(
    <input
        type="text"
        className="search"
        placeholder="Search Pokémon..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      

)
}