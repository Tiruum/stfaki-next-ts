'use client'

import { AddEntry } from "@/components/AddEntry";
import { EventCalendar } from "@/components/EventCalendar";
import { Metadata } from 'next'
import { createContext, useContext, useEffect, useState } from "react";
import Entry from "@/types/entry";

const CalendarContext = createContext<Entry[]>([])
 
// export const metadata: Metadata = {
//   title: 'Комната для собраний',
//   description: 'Комната для собраний'
// }

// async function getData() {
//     const res = await fetch('http://localhost:3000/api/entries', {
//         method: "get",
//         headers: {
//             // 'Accept': 'application/json',
//             // 'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbGluLnRhQHBoeXN0ZWNoLmVkdSIsImlkIjozLCJyb2xlcyI6W3siaWQiOjIsInZhbHVlIjoidXNlciIsImRlc2NyaXB0aW9uIjoi0J_QvtC70YzQt9C-0LLQsNGC0LXQu9GMIiwiY3JlYXRlZEF0IjoiMjAyMy0wMi0xOFQyMDowNzo0NC44NDNaIiwidXBkYXRlZEF0IjoiMjAyMy0wMi0xOFQyMDowNzo0NC44NDNaIiwiVXNlclJvbGVzIjp7ImlkIjoyLCJyb2xlSWQiOjIsInVzZXJJZCI6M319LHsiaWQiOjEsInZhbHVlIjoiYWRtaW4iLCJkZXNjcmlwdGlvbiI6ItCQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAIiwiY3JlYXRlZEF0IjoiMjAyMy0wMi0xN1QyMjo1MDo1Mi4yNjRaIiwidXBkYXRlZEF0IjoiMjAyMy0wMi0xOVQxNzoxNDowMi41NDlaIiwiVXNlclJvbGVzIjp7ImlkIjozLCJyb2xlSWQiOjEsInVzZXJJZCI6M319XSwiaWF0IjoxNjg4NzY5OTI2LCJleHAiOjE2ODg4NTYzMjZ9.Kh1lz6lOvvpXHZGe2w-Nq5SXG2-89j8uNYQtUkVPCuk'
//         },
//         // body: JSON.stringify({
//         //     email: "selin.ta@phystech.edu",
//         //     password: "Selin2002"
//         // })
//     }).then(
//         (res) => (res.json())
//     ).then(
//         (data) => {
//             console.log(data)
//         }
//     )
// }

// getData()


export default function Kds() {

    let [ifAdd, setIfAdd] = useState(false)

    let [calendarData, setCalendarData] = useState<Entry[]>([{
        "id": Date.now() + Math.ceil(Math.random()*1000000),
        "time": ["00:00", "06:00"],
        "title": "Просмотр фильма 🎥",
        "username": "Никита Буланов",
        "date": new Date(Date.now()+86400000*2).toJSON().slice(0, 10),
        "color": "blue",
        "darkColor": "sky",
        "userId": "2"
    },
    {
        "id": Date.now() + Math.ceil(Math.random()*1000000),
        "time": ["04:00", "08:00"],
        "title": "Ботаем",
        "username": "Тимур Селин",
        "date": new Date(Date.now()+86400000*3).toJSON().slice(0, 10),
        "color": "purple",
        "darkColor": "fuchsia",
        "userId": "1"
    },
    {
        "id": Date.now() + Math.ceil(Math.random()*1000000),
        "time": ["03:00", "07:00"],
        "title": "Прогаем сайт",
        "username": "Рената Костолина",
        "date": new Date(Date.now()+86400000*4).toJSON().slice(0, 10),
        "color": "pink",
        "darkColor": "indigo",
        "userId": "3"
    }])

    useEffect(() => {
        setCalendarData(calendarData)
    }, [calendarData])
  
  return (
    <>
    <div className="mb-8">
        <h1 className="font-semibold text-3xl">Комната для собраний 👥</h1>
        <p className="text-base mt-2">Здесь вы можете записаться в КДС</p>
        <button className="px-3 py-1 mt-2 border border-gray-50 rounded-md hover:opacity-70 transition-opacity" onClick={() => setIfAdd(!ifAdd)}>Записаться</button>
    </div>
    {
        ifAdd && (
            <div className="p-6 lg:w-1/2 w-full mb-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto">
                <AddEntry closeModal={setIfAdd} calendarData={calendarData} setCalendarData={setCalendarData} />
            </div>)
    }

    <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto">
        <EventCalendar calendarData={calendarData} />
    </div>
    </>
  )
}