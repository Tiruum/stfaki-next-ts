import User from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: `http://${process.env.BASEURL || `${location.host}`}/api/`}),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        loginUser: builder.mutation<User, {email: string, password: string}>({
            query: (payload) => ({
                url: `auth/login`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                },
            }),
            invalidatesTags: ['User']
        }),
        registerUser: builder.mutation<User, {username: string, email: string, password: string}>({
            query: (payload) => ({
                url: `auth/registration`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                },
            }),
            invalidatesTags: ['User']
        })
    })
})