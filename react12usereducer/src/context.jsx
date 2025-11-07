import { createContext ,useReducer} from "react";

export const Context=createContext()


export const Provider=({children})=>{


const initial={
name:"",
password:"",
email:""

}

const reducer=(state,action)=>{

switch (action.type) {
  case "handleinput":

  return {...state,[action.field]:action.value}
    
    case "initial":
      return initial

  default:
    return state;
}


}
const submitu=(e)=>{
e.preventDefault()
console.log(state)
dispatch({type:"initial"})
}

const[state,dispatch]=useReducer(reducer,initial)

return(
<Context.Provider value={{state,submitu,dispatch}}>{children}</Context.Provider>

)

}