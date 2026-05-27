import { createSlice } from "@reduxjs/toolkit";
const CounterInputSlice = createSlice({
    name:"CounterSlice",
    initialState:{
        count:0,
        delta:1
    },
    reducers: {
        increment: (state) =>{
            // state.count++;   orr
            state.count+= state.delta;
        },
        decrement: (state) =>{
 // state.count--   or;
            state.count-= state.delta;
        },
      updateDelta:(state , params) =>{
        // to access just do params.payload here
//    console.log("19", params.payload);
   const delta = params.payload
   state.delta = delta
}
    }
})
// export const actions = CounterInputSlice.actions;
export default CounterInputSlice;