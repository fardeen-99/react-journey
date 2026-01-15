    import { createSlice } from "@reduxjs/toolkit";


    const Componentreducer=createSlice({

    name:"todo",
    initialState:{
        task:["fardeen"]
    },
    reducers:{

    addtask:(state,action)=>{
state.task=[...state.task,action.payload]

    },
    deletetask:(state,action)=>{
       state.task= state.task.filter((task)=>task!==action.payload)
    },


    }


    })
   export const {addtask,deletetask}=Componentreducer.actions;
   export default Componentreducer.reducer