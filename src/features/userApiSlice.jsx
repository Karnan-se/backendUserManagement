import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const USER_URL = "http://localhost:3000/api/user";

export const userSlice = createApi({
    reducerPath: "userAuth",  // This is the key in your Redux store for the slice
    baseQuery: fetchBaseQuery({ baseUrl: USER_URL }),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
        }),
        userRegister: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
        }),
        getUserData: builder.query({
            query: () => "/",
        }),
    }),
});

// Export hooks for usage in functional components
export const { useUserLoginMutation, useUserRegisterMutation, useGetUserDataQuery } = userSlice;
