import LaundryEntry, { CreateLaundryEntry } from "@/types/laundryEntry";
import Wm from "@/types/wm";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const laundryEntriesApi = createApi({
    reducerPath: "laundryEntriesApi",
    baseQuery: fetchBaseQuery({baseUrl: `http://${process.env.BASEURL || `${location.host}`}/api/`}),
    tagTypes: ['LaundryEntry'],
    endpoints: (builder) => ({
        getLaundryEntries: builder.query<LaundryEntry[], void>({ query: () => `wm-entries/` }),
        getWms: builder.query<Wm[], void>({ query: () => `wms/` }),
        getLaundryEntriesByDate: builder.query({
            query: (date) => `wm-entries/${date}`,
            providesTags: result => ['LaundryEntry']
        }),
        addLaundryEntry: builder.mutation<void, CreateLaundryEntry>({
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
        deleteLaundryEntry: builder.mutation<void, number>({
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