import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice/Counterslice.js";
import CounterInputSlice from "./slice/CounterInputSlice.js";
import userSlice from "./slice/userSlice.js";


const store =configureStore({
    reducer:{
        CounterState:CounterSlice.reducer,
        // CounterInputSlice:CounterInputSlice.reducer
        CounterInputSlice:CounterInputSlice.reducer,
        userSection:userSlice.reducer

    }
})
export default store;