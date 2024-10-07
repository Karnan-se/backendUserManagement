import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    userInfo:localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")): null
}




const userAuthSlice =createSlice({
    name:"userSlice",
    initialState,
    reducers:({
        setUserCredential:(state, action)=>{
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        userLogout:(state)=>{
            state.userInfo = null;
            localStorage.removeItem("userInfo")
        }

        
    })
})

export default userAuthSlice.reducer;
export const  {setUserCredential, userLogout} = userAuthSlice.actions