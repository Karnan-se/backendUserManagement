import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import trashReducer from "../features/trashSlice";



export const store = configureStore({
    reducer:{
        auth:authReducer,
        post:trashReducer
    }
})