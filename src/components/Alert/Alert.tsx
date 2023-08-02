"use client";

import { FC, useState } from "react";

interface Props {
    heading: string,
    text: string,
}

export const Alert: FC<Props> = ({heading, text}) => {
    const [showAlert, setShowAlert] = useState(true)
    return (
            showAlert && <>
            <div onClick={() => setShowAlert(false)} className="absolute top-0 left-0 z-[22] w-screen h-screen bg-gray-700 backdrop-filter backdrop-blur-lg bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-20 cursor-pointer">
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[22] bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg p-6 w-full md:w-1/3">
                    <div className="absolute top-5 right-5 cursor-pointer" onClick={() => setShowAlert(false)}><Cross /></div>
                    {heading && <h1 className="h1 text-2xl text-black dark:text-white">{heading}</h1>}
                    {text && <p className="text-gray-500 dark:text-gray-500 mb-4">{text}</p>}
                    <div className="flex w-full">
                        <button onClick={() => setShowAlert(false)} className="ml-auto bottom-0 right-0 p-2 border rounded">Закрыть</button>
                    </div>
                </div>
            </div>
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