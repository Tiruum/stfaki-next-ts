import LaundryEntry from "@/types/laundryEntry";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const laundryEntriesApi = createApi({
    reducerPath: "laundryEntriesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/"}),
    tagTypes: ['LaundryEntry'],
    endpoints: (builder) => ({
        getLaundryEntries: builder.query({ query: (date) => `wm-entries/` }),
        getLaundryEntriesByDate: builder.query({
            query: (date) => `wm-entries/${date}`,
            providesTags: result => ['LaundryEntry']
        }),
        addLaundryEntry: builder.mutation({
            query: (payload) => ({
                url: `wm-entries`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                }
            }),
            invalidatesTags: ['LaundryEntry']
        }),
        deleteLaundryEntry: builder.mutation({
            query: (id) => ({
                url: `wm-entries/${id}`,
                method: 'DELETE',
                headers: {
                    // 'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                }
            }),
            invalidatesTags: ['LaundryEntry']
        }),
    }),
});