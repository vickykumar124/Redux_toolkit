import { createSlice } from "@reduxjs/toolkit";
const CounterSlice =createSlice ({
    name:"CounterSlice",
    initialState:{
        count:10
    },
    reducers: {
        increment: (state) =>{
            // state.count++;   orr
            state.count+= 1;
        },
        decrement: (state) =>{
 // state.count--   or;
            state.count-= 1;
        }
    }
})
export default CounterSlice;