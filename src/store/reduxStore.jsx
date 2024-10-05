import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { usersApiSlice } from "../features/userApiSlice";




export const store = configureStore({
    reducer:{
        auth:authReducer,
        [usersApiSlice.reducerPath] :usersApiSlice.reducer
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApiSlice.middleware),
})