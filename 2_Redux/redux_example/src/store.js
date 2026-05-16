import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Counterslice.js";
const store =configureStore({
    reducer:{
        CounterState:CounterSlice.reducer,
    }
})
export default store;