import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import colorReducer from './colorSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        colors:colorReducer,
    }
})