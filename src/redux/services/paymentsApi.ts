import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const paymentsApi = createApi({
    reducerPath: "paymentsApi",
    baseQuery: fetchBaseQuery({baseUrl: `http://${process.env.BASEURL || `${location.host}`}/api/`}),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAllPaymentsData: builder.query({ query: () => `payment/yoo` }),
        getPaymentData: builder.query({ query: (id: string) => `payment/yoo/${id}` }),
        makePayment: builder.mutation({
            query: (payload: {amount: number, userId: number}) => ({
                url: `payment/yoo`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                }
            })
        }),
        checkPayment: builder.mutation({
            query: (payload: {id: string}) => ({
                url: `payment/localstatus/`,
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                }
            }),
            invalidatesTags: ['User']
        }),
        getLocalPaymentData: builder.query({ query: (id: string) => `payment/local/${id}` }),
        checkLocalPayment: builder.mutation({
            query: (id: string) => ({
                url: `payment/local/${id}`,
                method: 'PATCH',
                body: {isChecked: true},
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': `Bearer ${payload.token}`,
                }
            })
        }),
    }),
});