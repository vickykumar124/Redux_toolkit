import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"userSlice",
    initialState:{
       user:null,
       loading:true,
       error:null
    },
    reducers: {
  onpending:(state) =>{
   state.user=null;
    state.loading=true;
    state.error=null;
  },
  onrejected:(state, params) => {
  state.user=null;
    state.loading=false;
    state.error=params.payload;
  },
onfulfilled:(state, params) => {
  state.user=params.payload;
    state.loading=false;
    state.error=error;
    }
}
})
// export const actions = CounterInputSlice.actions;
export default userSlice;