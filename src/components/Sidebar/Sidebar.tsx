"use client";

import datetimeDiff from "@/helpers/datetimeDiff";
import dotDateToDash from "@/helpers/dotDateToDash";
import { useAuthUser } from "@/hooks/useAuthUser";
import { laundryEntriesApi } from "@/redux/services/laundryEntriesApi";
import LaundryEntry from "@/types/laundryEntry";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export function Sidebar() {
    const pathname = usePathname()
    const [cookies, setCookie, removeCookies] = useCookies(['user'])
    let loggedUser = useAuthUser(cookies)

    let [ifShow, setIfShow] = useState(false)
    function handleResize() {
        if ((window.innerWidth <= 640) && (ifShow == true)) {
        setIfShow(false)
        console.log(1);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    })

    // Код для того, чтобы получить количество записей пользователя в стиралку
    // let selectedDate = useSelector((state: {selectedDate: string}) => selectSelectedDateModule(state))
    const todayDate = dotDateToDash(new Date().toLocaleDateString("eu-RU", {timeZone: "Europe/Moscow"}))
    const {data, isLoading, error} = laundryEntriesApi.useGetLaundryEntriesByDateQuery(todayDate)
    let laundryEntriesQuantity = null
    if (!isLoading && !!loggedUser?.username) {
        laundryEntriesQuantity = data.filter((entry: LaundryEntry) => (entry.userInfo.username === loggedUser.username && datetimeDiff(entry.date + 'T' + entry.time.slice(0, 5)) > 0)).length
    }

    // const activeStyle = "bg-gray-200 dark:bg-gray-700 text-gray-50 dark:text-white"
    // const merged = "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-50 dark:text-white"
    // const defaultStyle = "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
    return (
        <>
        <aside className={`lg:w-72 sm:w-16 ${ifShow ? 'w-full' : 'w-0'} h-screen fixed transition-all overflow-auto z-[21]`} aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-white dark:bg-gray-800 h-full left-0 shadow-sm backdrop-filter backdrop-blur-lg bg-opacity-40 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-40">
            <ul className="space-y-2">
                <li>
                    {loggedUser ?
                    <Link href={`/user/${loggedUser.id}`}>
                        <span className="items-center flex p-2 text-xl font-semibold text-gray-900 dark:text-white">
                            <div className="aspect-square lg:h-12 h-6 rounded-full bg-white overflow-hidden">
                                <div className="w-full h-full object-center object-cover rounded-full"></div>
                            </div>
                            <span className={`ml-3 ${ifShow ? 'flex' : 'hidden'} lg:flex lg:flex-col`}>
                                <span className="text-md whitespace-nowrap text-ellipsis overflow-hidden">{loggedUser.username}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Баланс: {loggedUser.balance}₽</span>
                            </span>
                        </span>
                    </Link>:
                    <Link href="/auth">
                        <span className="items-center flex p-2 text-base font-semibold text-gray-900 dark:text-white cursor-pointer">
                            <div className="aspect-square h-6 rounded-full bg-white overflow-hidden"></div>
                            <span className={`ml-3 ${ifShow ? 'block' : 'hidden'} lg:block`}>Войти</span>
                        </span>
                    </Link>}
                </li>
                <li>
                    <Link href="/" className={
                        pathname === '/' ?
                        "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white":
                        "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }>
                        <svg className={
                            pathname === '/' ?
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-black dark:text-white` :
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-gray-500 dark:text-gray-400`
                        } fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M362.667,383.841v128H448c35.346,0,64-28.654,64-64V253.26c0.005-11.083-4.302-21.733-12.011-29.696l-181.29-195.99    c-31.988-34.61-85.976-36.735-120.586-4.747c-1.644,1.52-3.228,3.103-4.747,4.747L12.395,223.5    C4.453,231.496-0.003,242.31,0,253.58v194.261c0,35.346,28.654,64,64,64h85.333v-128c0.399-58.172,47.366-105.676,104.073-107.044    C312.01,275.383,362.22,323.696,362.667,383.841z"/>
		                    <path d="M256,319.841c-35.346,0-64,28.654-64,64v128h128v-128C320,348.495,291.346,319.841,256,319.841z"/>
                        </svg>
                        <span className={`ml-3 ${ifShow ? 'block' : 'hidden'} lg:block`}>Главная</span>
                    </Link>
                </li>
                <li>
                    <Link href="/laundry" className={
                        pathname === '/laundry' ?
                        "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white":
                        "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }>
                        <svg className={
                            pathname === '/laundry' ?
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-black dark:text-white` :
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-gray-500 dark:text-gray-400`
                        } fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.43,10v6.25a1.7,1.7,0,0,1-1.27,1.69,2.07,2.07,0,0,1-.5.06H3.49a1.71,1.71,0,0,1-1.77-1.77q0-6.23,0-12.46A1.7,1.7,0,0,1,3.48,2H13.66a1.71,1.71,0,0,1,1.77,1.77ZM8.56,16.29A4.58,4.58,0,1,0,4,11.71,4.57,4.57,0,0,0,8.56,16.29ZM4.86,4.86h.82a.59.59,0,0,0,.61-.57.58.58,0,0,0-.6-.57c-.56,0-1.11,0-1.66,0a.57.57,0,0,0-.6.57A.57.57,0,0,0,4,4.86Zm8.29,0a.59.59,0,0,0,.57-.58.58.58,0,0,0-1.15,0A.58.58,0,0,0,13.15,4.86ZM11.43,3.72a.57.57,0,0,0-.57.56.57.57,0,1,0,1.14,0A.57.57,0,0,0,11.43,3.72Z"
                                transform="translate(1.71 0)" />
                            <path
                                d="M12,11.73a3.37,3.37,0,0,1-.59,1.91,3.42,3.42,0,0,1-6.22-1.37.41.41,0,0,1,0-.11c0-.53-.13-.42.39-.62a3.71,3.71,0,0,1,3,.16,3.9,3.9,0,0,0,2,.41,3.66,3.66,0,0,0,1.22-.31Z"
                                transform="translate(1.71 0)" />
                        </svg>
                        <span className={`ml-3 ${ifShow ? 'block' : 'hidden'} lg:block`}>Прачечная</span>
                        {
                            !!laundryEntriesQuantity && !isLoading && !error &&
                            <span className="inline-flex justify-center items-center w-3 h-3 p-2 text-xs lg:p-3 lg:ml-3 lg:text-sm font-medium text-green-600 bg-green-200 rounded-full dark:bg-green-800 dark:text-green-200" title="Активных записей на сегодня">{laundryEntriesQuantity}</span>
                        }
                        </Link>
                </li>
                <li>
                    <Link href="/club" className={
                        pathname === '/club' ?
                        "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white":
                        "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }>
                        <svg className={
                            pathname === '/club' ?
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-black dark:text-white` :
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-gray-500 dark:text-gray-400`
                        } fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM5.683,16H1a1,1,0,0,1-1-1A6.022,6.022,0,0,1,5.131,9.084a1,1,0,0,1,1.1,1.266A6.009,6.009,0,0,0,6,12a5.937,5.937,0,0,0,.586,2.57,1,1,0,0,1-.9,1.43ZM17,24H7a1,1,0,0,1-1-1,6,6,0,0,1,12,0A1,1,0,0,1,17,24ZM18,8a4,4,0,1,1,4-4A4,4,0,0,1,18,8ZM6,8a4,4,0,1,1,4-4A4,4,0,0,1,6,8Zm17,8H18.317a1,1,0,0,1-.9-1.43A5.937,5.937,0,0,0,18,12a6.009,6.009,0,0,0-.236-1.65,1,1,0,0,1,1.105-1.266A6.022,6.022,0,0,1,24,15,1,1,0,0,1,23,16Z"/>
                        </svg>
                        <i className="fi fi-sr-tool-box"></i>
                        <span className={`flex-1 ml-3 whitespace-nowrap ${ifShow ? 'block' : 'hidden'} lg:block`}>Клуб Романтики</span>
                    </Link>
                </li>
                <li>
                    <Link href="/kds" className={
                        pathname === '/kds' ?
                        "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white":
                        "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }>
                        <svg className={
                            pathname === '/kds' ?
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-black dark:text-white` :
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-gray-500 dark:text-gray-400`
                        } fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                            </path>
                        </svg>
                        <span className={`flex-1 ml-3 whitespace-nowrap ${ifShow ? 'block' : 'hidden'} lg:block`}>Комната для собраний</span>
                    </Link>
                </li>
                <li>
                    <Link href="/meetingroom" className={
                        pathname === '/meetingroom' ?
                        "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white":
                        "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }>
                        <svg className={
                            pathname === '/meetingroom' ?
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-black dark:text-white` :
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-gray-500 dark:text-gray-400`
                        } fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.85,9.37a.63.63,0,0,1-.63-.62,5,5,0,0,0-5-5,.63.63,0,0,1,0-1.25,6.25,6.25,0,0,1,6.25,6.25A.62.62,0,0,1,16.85,9.37ZM15,8.75A3.75,3.75,0,0,0,11.22,5a.63.63,0,0,0,0,1.25,2.5,2.5,0,0,1,2.5,2.5.63.63,0,0,0,1.25,0Zm1.37,7.6.56-.65a1.93,1.93,0,0,0,0-2.74l-1.52-1.18a1.93,1.93,0,0,0-2.67,0l-1.19,1A8,8,0,0,1,7.18,8.45l1-1.18a1.94,1.94,0,0,0,0-2.68L7,3.07a1.92,1.92,0,0,0-2.7,0l-.72.62c-4.25,4.93,4.9,14,10,13.84A3.89,3.89,0,0,0,16.34,16.35Z" />
                        </svg>
                        <span className={`flex-1 ml-3 whitespace-nowrap ${ifShow ? 'block' : 'hidden'} lg:block`}>Переговорная</span>
                    </Link>
                </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <Link href="/instruments" className={
                        pathname === '/instruments' ?
                        "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white":
                        "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }>
                        <svg className={
                            pathname === '/instruments' ?
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-black dark:text-white` :
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-gray-500 dark:text-gray-400`
                        } fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19,12h5v7c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5v-7H5v1c0,.552,.447,1,1,1s1-.448,1-1v-1h10v1c0,.552,.447,1,1,1s1-.448,1-1v-1Zm5-3v1h-5v-1c0-.552-.447-1-1-1s-1,.448-1,1v1H7v-1c0-.552-.447-1-1-1s-1,.448-1,1v1H0v-1c0-2.757,2.243-5,5-5h1.101C6.566,1.721,8.586,0,11,0h2c2.414,0,4.434,1.721,4.899,4h1.101c2.757,0,5,2.243,5,5ZM8.184,4h7.631c-.414-1.161-1.514-2-2.816-2h-2c-1.302,0-2.402,.839-2.816,2Z"/>
                        </svg>
                        <span className={`flex-1 ml-3 whitespace-nowrap ${ifShow ? 'block' : 'hidden'} lg:block`}>Инструментарий</span>
                        <span
                            className="justify-center items-center hidden lg:inline-flex px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Скоро</span>
                    </Link>
                </li>
                <li>
                    <Link href="/vacuumcleaner" className={
                        pathname === '/vacuumcleaner' ?
                        "flex items-center p-2 text-base font-normal rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white":
                        "flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }>
                        <svg className={
                            pathname === '/vacuumcleaner' ?
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-black dark:text-white` :
                            `flex-shrink-0 w-6 h-6 p-0.5 transition duration-75 text-gray-500 dark:text-gray-400`
                        } fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.5,24a1,1,0,0,1-.929-.628l-.844-2.113-2.116-.891a1.007,1.007,0,0,1,.035-1.857l2.088-.791.837-2.092a1.008,1.008,0,0,1,1.858,0l.841,2.1,2.1.841a1.007,1.007,0,0,1,0,1.858l-2.1.841-.841,2.1A1,1,0,0,1,19.5,24ZM10,21a2,2,0,0,1-1.936-1.413L6.45,14.54,1.387,12.846a2.032,2.032,0,0,1,.052-3.871L6.462,7.441,8.154,2.387A1.956,1.956,0,0,1,10.108,1a2,2,0,0,1,1.917,1.439l1.532,5.015,5.03,1.61a2.042,2.042,0,0,1,0,3.872h0l-5.039,1.612-1.612,5.039A2,2,0,0,1,10,21ZM20.5,7a1,1,0,0,1-.97-.757l-.357-1.43L17.74,4.428a1,1,0,0,1,.034-1.94l1.4-.325L19.53.757a1,1,0,0,1,1.94,0l.354,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355L21.47,6.243A1,1,0,0,1,20.5,7Z"/>
                        </svg>
                        <span className={`flex-1 ml-3 whitespace-nowrap ${ifShow ? 'block' : 'hidden'} lg:block`}>Пылесос</span>
                        <span
                            className="justify-center items-center hidden lg:inline-flex px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Скоро</span>
                    </Link>
                </li>
            </ul>
            {loggedUser &&
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap hidden lg:block cursor-pointer" onClick={() => removeCookies('user')}>Выйти</span>
                    </span>
                </li>
            </ul>}
            <span className="absolute text-gray-600 text-xs mt-auto bottom-3">Beta v2.0.0.0</span>
            {/* prealpha(0)-alpha(1)-beta(2)-releasecandidate(3)-release(4).major-changes.minor-changes.amount-of-fixed-bugs */}
        </div>
    </aside>
    {
        !ifShow ? 
        <div onClick={() => setIfShow(true)} className="sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 left-3 rounded-full flex items-center justify-center text-3xl font-semibold cursor-pointer opacity-90 z-[22]"><Plus /></div> :
        <div onClick={() => setIfShow(false)} className='sm:hidden fixed text-white bg-gray-800 w-10 h-10 top-3 right-3 rounded-full flex items-center justify-center text-3xl font-semibold cursor-pointer opacity-90 z-[22]'><Cross /></div>
    }
    </>
    )
}

function Cross() {
    return (
        <svg viewBox="0 0 512.021 512.021" width="16" height="16">
        <path fill='#9ca3af' d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
        </svg>
    )
}

function Plus() {
    return (
        <svg viewBox="0 0 512 512" width="20" height="20">
        <path fill='#9ca3af' d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
        </svg>
    )
}