"use client";

import { useAuthUser } from "@/hooks/useAuthUser";
import { useGetData } from "@/hooks/useGetData";
import useToasts from "@/hooks/useToasts";
import { authApi } from "@/redux/services/authApi";
import { paymentsApi } from "@/redux/services/paymentsApi";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function PaymentResponse() {
    interface LocalPaymentData {
        amount: number,
        localId: string,
        yookassaId: string,
        userId: number,
        isChecked: boolean
    }

    interface PaymentData {
        status: string,
        amount: {
            value: number,
            currency: string
        }
    }

    const searchParams = useSearchParams()
    const router = useRouter()
    const {addToast} = useToasts()

    const paymentId = searchParams.get('paymentId') as string // получаю из url

    const [checkPayment] = paymentsApi.useCheckPaymentMutation()
    const [reloadUser] = authApi.useChangeUserInfoMutation()
    // const [paymentData, setPaymentData] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            const paymentStatus = await checkPayment({id: paymentId}) as {data: {response: {id: number}, status: number, message: string}}

            if (paymentStatus.data.status === 200) {
                reloadUser({id: paymentStatus.data.response.id})
                addToast({type: 'success', message: `Спасибо за оплату! ❤`, timeout: 3000})
                addToast({type: 'info', message: `Мы проверим статус платежа и деньги в скором времени зачислятся на счет`, timeout: 5000})
                // setPaymentData(paymentStatus)
                router.push('/user')
            } else {
                addToast({type: 'error', message: paymentStatus.data.message, timeout: 3000})
                router.push('/user')
            }
        }

        fetchData()
    }, [paymentId])

    
    return (
        <>
        </>
    )
}