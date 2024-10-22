import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:'color',
    initialState:{value:'white'},
    reducers:{
        changeColor:(preColor)=>preColor.value=action.payload,
    }
})
export const {changeColor} = colorSlice.actions
export default colorSlice.reducer