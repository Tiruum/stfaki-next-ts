'use client'

import { AddEntry } from "@/components/AddEntry/AddEntry";
import { EventCalendar } from "@/components/EventCalendar/EventCalendar";
import { Metadata } from 'next'
import { useState } from "react";
 
export const metadata: Metadata = {
  title: 'Комната для собраний',
  description: 'Комната для собраний'
}

export default function Kds() {
    interface Entry {
        id: number,
        time: string[],
        title: string,
        date: string,
        color: string,
        darkColor: string,
        username: string,
        userId: string
    }

    let [ifAdd, setIfAdd] = useState(false)

    function toggleModal(): void {
        ifAdd ? setIfAdd(false) : setIfAdd(true)
    }

    const calendarData = [{
        "id": 1,
        "time": ["00:00", "06:00"],
        "title": "Просмотр фильма 🎥",
        "username": "Никита Буланов",
        "date": "2023-07-07",
        "color": "blue",
        "darkColor": "sky",
        "userId": "2"
    },
    {
        "id": 2,
        "time": ["04:00", "08:00"],
        "title": "Ботаем",
        "username": "Тимур Селин",
        "date": "2023-07-08",
        "color": "purple",
        "darkColor": "fuchsia",
        "userId": "1"
    },
    {
        "id": 3,
        "time": ["03:00", "07:00"],
        "title": "Прогаем сайт",
        "username": "Рената Костолина",
        "date": "2023-07-09",
        "color": "pink",
        "darkColor": "indigo",
        "userId": "3"
    }] as Entry[]
  
  return (
    <>
    <div className="mb-8">
        <h1 className="font-semibold text-3xl">Комната для собраний 👥</h1>
        <p className="text-base mt-2">Здесь вы можете записаться в КДС</p>
        <button className="px-3 py-1 mt-2 border border-gray-50 rounded-md hover:opacity-70 transition-opacity" onClick={toggleModal}>Записаться</button>
    </div>

    {
        ifAdd ? 
            (
            <div className="p-6 lg:w-1/2 w-full mb-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto">
                <AddEntry />
            </div>
            ) : ''
    }

    <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto">
        <EventCalendar calendarData={calendarData} />
    </div>
    </>
  )
}