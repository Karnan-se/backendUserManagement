import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.jsx";
import { usersApiSlice } from "../features/adminApiSlice.jsx";




export const store = configureStore({
    reducer:{
        adminauth:authReducer,
        [usersApiSlice.reducerPath] :usersApiSlice.reducer
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApiSlice.middleware),
})