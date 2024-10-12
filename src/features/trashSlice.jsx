import { configureStore, createSlice } from "@reduxjs/toolkit";


const counter = createSlice({
    name:"counter",
    initialState:{
        count:0,
    },
    reducers:{
        increment:(state, action)=>{
            state.count = state.count++
        },
        decrement:(state, action)=>{
            state.count = state.count--
        }
    }

})

export const  {increment, decrement} = counter.actions;
export default counter.reducer

const Store = configureStore({
    reducer:{
        counter:counter.reducer,
    },
   

})