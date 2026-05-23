import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice/Counterslice.js";
import CounterInputSlice from "./slice/CounterInputSlice.js";



const store =configureStore({
    reducer:{
        CounterState:CounterSlice.reducer,
        CounterInputSlice:CounterInputSlice.reducer
        

    }
})
export default store;