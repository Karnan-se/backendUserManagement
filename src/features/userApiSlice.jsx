import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const USER_URL = "http://localhost:3000/api/user";

export const userSlice = createApi({
    reducerPath: "userAuthApi",  // This
    baseQuery: fetchBaseQuery({ baseUrl: USER_URL , credentials : "include",}),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
            invalidatesTags:["users"]
        }),
        userRegister: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            invalidatesTags:["users"]

        }),
        getUserData: builder.query({
            query: () => "/",
            providesTags:["users"]
        }),

        logout: builder.mutation({
            query:()=>({
                url:"/logout",
                method:"POST",
                
            }),
            invalidatesTags:["users"]
                
        }),
        userUpdate:builder.mutation({
            query:(data)=>({
                url:"/update",
                method:"POST",
                body:data
            }),
            invalidatesTags:["users"]

        }),
    

    }),

});

// Export hooks for usage in functional components
export const { useUserLoginMutation, useUserRegisterMutation, useGetUserDataQuery, useLogoutMutation, useUserUpdateMutation } = userSlice;
