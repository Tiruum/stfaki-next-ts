import { Metadata } from "next";

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

export const metadata: Metadata = {
    title: 'Профиль',
    description: 'Профиль пользователя'
}

export default function Page({params}: {params: {id: number}}) {
    const users = [{id: 1, name: 'Тимур', surname: 'Селин', dateOfBirth: '29.04.2002', email: 'selin.ta@phystech.edu', room: '232', dorm: '10', social: {tg: '@umpa_of_lumpia', vk: '@tiruum', phone: '89536151008'}, balance: 1000},
    {id: 2, name: 'Никита', surname: 'Буланов', dateOfBirth: '14.13.2002', email: 'bulanov.na@phystech.edu', room: '232', dorm: '10', social: {tg: '@umpa_of_lumpia', vk: '@tiruum', phone: '89536151008'}, balance: 1000}] as User[]
    const user = users.find((user) => user.id == params.id)
    return (
    <>
            <div className="mb-8">
            <h1 className="font-semibold text-3xl">Профиль 👨</h1>
            <p className="text-base mt-2">Просматривайте и изменяйте свои данные</p>
        </div>

        <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto p-6">
            <div className="rounded-xl bg-gradient-to-tr from-gray-700 to-gray-600 border-2 border-gray-600 text-white px-8 py-6 w-fit h-fit flex-none">
                <div className="flex gap-5">
                    <div className="w-32 h-32 aspect-square bg-gray-500 rounded-full border-2 border-gray-500"></div>
                    <div className="flex flex-col">
                        <p className="font-semibold text-2xl">{`${user?.name} ${user?.surname}`}</p>
                        <span>id: {params.id}</span>
                        <span>Email: {user?.email}</span>
                        <span>Квартира: {user?.dorm}ка, {user?.room}</span>

                        <span className="mt-4">phone: {user?.social.phone}</span>
                        <span className="flex gap-2 align-middle">tg: {user?.social.tg}</span>
                        <span>vk: {user?.social.vk}</span>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}