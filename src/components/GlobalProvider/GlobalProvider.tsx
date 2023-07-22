"use client";

import { StoreProvider } from "@/redux/StoreProvider";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { Sidebar } from "../Sidebar/Sidebar";

export default function GlobalProvider({children} : {children: React.ReactNode}) {
    return (
    <>
    <CookiesProvider>
        <StoreProvider>
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white h-full min-h-screen relative overflow-auto">
            {/* <ToastList /> */}
            <div className="flex md:gap-4 gap-0 transition-all">
                <div className="flex-none lg:w-72 sm:w-16 w-0">
                    <Sidebar />
                </div>
                <div className="md:mr-8 md:mt-8 md:ml-4 md:mb-8 mr-2 mt-2 ml-2 mb-2 w-full h-fit overflow-auto md:pt-0 pt-12">
                {children}
                </div>
            </div>
        </div>
        </StoreProvider>
    </CookiesProvider>
    </>
    )
}