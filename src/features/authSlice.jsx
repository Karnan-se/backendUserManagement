 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import firebaseConfig from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

 
 const initialState ={
    user : null,
    loading:false,
    error:null
 }

 export const signInWithFirebase = createAsyncThunk("auth/signInWithFirebase", async({email, password}, thunkAPI)=>{
        try{
            const userCredential = await user.signInWithEmailAndPassword(email, password)
            return userCredential.user
        }catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }

 )
 const authSlice = createSlice({
    name : "auth",
    initialState: initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(signInWithFirebase.pending, state())
    }

    
 })


 export default authSlice.reducer