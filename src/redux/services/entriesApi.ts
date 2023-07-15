import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Entry, { CreateEntry } from "@/types/entry";

export const entriesApi = createApi({
    reducerPath: 'entriesApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/"}),
    tagTypes: ['Entry'],
    endpoints: (builder) => ({
        getRoomEntries: builder.query<Entry[], {roomName: string, fromDate: string, toDate: string}>({
            query: (payload) => `entries/filter?room=${payload.roomName}&fromDate=${payload.fromDate}&toDate=${payload.toDate}`,
            providesTags: result => ['Entry']
        }),
        addEntryToRoom: builder.mutation<void, CreateEntry>({
            query: (payload) => ({
                url: `entries/`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                },
            }),
            invalidatesTags: ['Entry']
        }),
        deleteEntryFromRoom: builder.mutation<void, number>({
            query: (id: number) => ({
                url: `entries/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Entry']
        })
    })
})