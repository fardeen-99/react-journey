import { useReducer } from "react"

export let Counter=()=>{

const init={
    count:0
}

const reduce=(state,action)=>{


    switch (action.type) {
        case "ghata":
            if(state.count>0){
            return{count : state.count - 2}
            }
            return state;
        case "jama":
            if(state.count<50){
            return{count:state.count + 2}
            }
      return state;
    
        default:
            return state
    }

}
const[state,dispatch]=useReducer(reduce,init)



return(
<>
<h1>{state.count}</h1>
<button onClick={()=>dispatch({type:"jama"})}>increament</button>
<button onClick={()=>dispatch({type:"ghata"})}>decreament</button>



</>


)

}