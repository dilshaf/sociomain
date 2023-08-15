import { createSlice } from "@reduxjs/toolkit";

const counter=createSlice({
    initialState:{
        count:0

    },
    name:'counter',
    reducers:{
        incrementFunction:(state,action)=>{
            state.count++
        },
        decrementFunction:(state,action)=>{
            state.count--
        }
    }
})
 export const {decrementFunction,incrementFunction}=counter.actions
 export default counter.reducer