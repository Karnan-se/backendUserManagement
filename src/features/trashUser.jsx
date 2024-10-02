import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


let intialState=[{
    id:nanoid(),
    name:"some Name"
}]
const user = createSlice({
    name:"user",
    reducers:{
        adduser:{
            reducer:(state, action)=>{
                state.push(action.payload)
            },
            prepare(id, name){
                return{
                    payload:{ 
                    id:id,
                    name:name,
                    }
                }
            }
        }
    }
})
export const selectAllUsers = (state)=> state.user 
// it will be used insise useSelector Managing the state
export default user.reducer;
export const {adduser} = user.actions