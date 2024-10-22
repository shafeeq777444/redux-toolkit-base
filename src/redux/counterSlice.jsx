import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(prestate)=>{prestate.value+=1},
        decrement:(preState)=>{preState.value-=1},
        adding:(preState,action)=>{preState.value=action.payload},
    }
})
export const {increment,decrement,adding} = counterSlice.actions
export default counterSlice.reducer
