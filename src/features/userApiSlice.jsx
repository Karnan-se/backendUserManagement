import { createSlice, nanoid, } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const USERS_URL ="http://localhost:3000/api/admin"

export const usersApiSlice = createApi({
    reducerPath:"userauth",
    baseQuery:fetchBaseQuery({baseUrl:USERS_URL}),

    endpoints:(builder)=>({
        login:builder.mutation({
            providesTags:["users-Details"],
            query:(data)=>({ 
             url:`/login`,
             method:"POST",
             headers:{
                "Content-Type" :"application/json",
             },
             body:data,
            }),
            invalidatesTags:["users-Details"]
        }),
        register:builder.mutation({
            query:(data)=>({
                url:`/register`,
                method:"POST",
                body:data,
            }),
            invalidatesTags:["users-Details"]
        }),
        logout:builder.mutation({
            query:()=>({
                url:`/logout`,
                method:"post",
            }),
            invalidatesTags:["users-Details"]
        }),
        updateuser:builder.mutation({
            query:(data)=>({
                url:`/profile`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["users-Details"]
        }),
        
    }),

});

export const {useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateuserMutation} = usersApiSlice

