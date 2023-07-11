import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const laundryEntriesApi = createApi({
    reducerPath: "laundryEntriesApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000/api/"}),
    endpoints: (builder) => ({
        getLaundryEntries: builder.query({ query: () => "wm-entries" }),
    }),
});

export const { useGetLaundryEntriesQuery }: any = laundryEntriesApi;