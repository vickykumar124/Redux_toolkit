import { createSlice } from "@reduxjs/toolkit";
const CounterInputSlice = createSlice({
    name:"CounterSlice",
    initialState:{
        count:0,
        delta:1
    },
    reducers: {
//         increment: (state) =>{
//             // state.count++;   orr
//             state.count+= 1;
//         },
//         decrement: (state) =>{
//  // state.count--   or;
//             state.count-= 1;
//         }
    }
})
export default CounterInputSlice;