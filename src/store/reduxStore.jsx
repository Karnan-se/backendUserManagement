import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.jsx";
import { adminApiSlice } from "../features/adminApiSlice.jsx";
import { userSlice } from "../features/userApiSlice.jsx";
import userAuthSlice from "../features/userAuthSlice.jsx";




export const store = configureStore({
    reducer:{
        adminauth:authReducer,
        userAuth:userAuthSlice,
        [adminApiSlice.reducerPath] :adminApiSlice.reducer,
        [userSlice.reducerPath] :userSlice.reducer,
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adminApiSlice.middleware).concat(userSlice.middleware)
})
