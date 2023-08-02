"use client";

import { useAuthUser } from "@/hooks/useAuthUser";
import useToasts from "@/hooks/useToasts";
import { authApi } from "@/redux/services/authApi";
import { paymentsApi } from "@/redux/services/paymentsApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

interface User {
    id: number,
    name: string,
    surname: string,
    dateOfBirth: string,
    email: string,
    room: string, 
    dorm: string,
    social: {tg: string, vk: string, phone: string},
    balance: number
}

// export const metadata: Metadata = {
//     title: 'Профиль',
//     description: 'Профиль пользователя'
// }

export default function User() {
    const [cookies, setCookie, removeCookies] = useCookies(['user'])
    const loggedUser = useAuthUser(cookies)
    const { data: userInfo, isLoading: isLoadingUserInfo, error: errorUserInfo } = authApi.useGetUserInfoQuery(loggedUser?.id, { skip: !!!loggedUser?.id })
    console.log(userInfo)
    const {addToast} = useToasts()

    const [amount, setAmount] = useState(100)

    const [makePayment] = paymentsApi.useMakePaymentMutation()
    const router = useRouter()
    const handlePay = async () => {
        if (amount >= 10 && !!amount && !!loggedUser?.id) {
            const paymentOutput = await makePayment({amount: amount, userId: Number(loggedUser?.id)}) as {data: {confirmation: {confirmation_url: string}}}
            paymentOutput?.data?.confirmation?.confirmation_url && router.push(paymentOutput?.data?.confirmation?.confirmation_url)
        } else {
            addToast({type: 'error', message: 'Пополните счет минимум на 10 рублей', timeout: 3000})
        }
    }

    return (
    <>
        <div className="mb-8">
            <h1 className="font-semibold text-3xl">Профиль 👨</h1>
            <p className="text-base mt-2">Просматривайте и изменяйте свои данные</p>
        </div>

        <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto p-6">
            <div className="rounded-xl bg-gradient-to-tr from-gray-700 to-gray-600 border-2 border-gray-600 text-white px-8 py-6 w-fit h-fit flex-none">
                <div className="flex gap-5 w-full md:w-fit">
                    <div className="w-32 h-32 aspect-square bg-gray-500 rounded-full border-2 border-gray-500 hidden md:block"></div>
                    <div className="flex flex-col">
                        {loggedUser?.username && <p className="font-semibold text-2xl">{loggedUser.username}</p>}
                        {loggedUser?.id && <span>id: {loggedUser.id}</span>}
                        {loggedUser?.email && <span>Email: {loggedUser.email}</span>}
                        {loggedUser?.roles && <span>Статус: {JSON.parse(JSON.stringify(loggedUser.roles)).map((role: any) => (role.description))}</span>}
                        {!isLoadingUserInfo && !errorUserInfo && <span>Баланс: {userInfo?.balance}₽</span>}
                        {!isLoadingUserInfo && !errorUserInfo &&
                        <form className="flex gap-1 items-center" onSubmit={(e) => {e.preventDefault(); handlePay()}}>
                            <input type="number" className={`inpt ${Number(amount) < 10 && 'invalid' }`} name="amount" value={amount} onChange={(e) => {setAmount(Number(e.target.value))}} />
                            <button className="rounded bg-gray-400/25 py-1 px-3 mt-1" type="submit">Пополнить</button>
                        </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}