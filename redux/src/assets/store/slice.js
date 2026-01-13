import {createSlice} from '@reduxjs/toolkit'

const Counterslice=createSlice({

name:'counter',
initialState:{
    value:0
},
reducers:{

increment:(state)=>{state.value+=1},
decrement:(state)=>{state.value-=1},
manchala:(state,actions)=>{state.value+=actions.payload}

}


})

export const {increment,decrement,manchala}=Counterslice.actions;
export default Counterslice.reducer;