import { paymentsApi } from "@/redux/services/paymentsApi"

export const useGetData = (localPaymentData: any) => {
    const { data, isLoading, error } = paymentsApi.useGetPaymentDataQuery(localPaymentData?.yookassaId)
    if (!isLoading) return data
}