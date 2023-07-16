'use client'

import { AddEntry } from "@/components/AddEntry";
import { EventCalendar } from "@/components/EventCalendar";
import { Metadata } from 'next'
import { createContext, useEffect, useState } from "react";
import Entry, { CreateEntry } from "@/types/entry";
import { entriesApi } from "@/redux/services/entriesApi";
import LoadingEventGrid from "@/components/EventCalendar/LoadingEventCalendar";
import { ErrorAlert } from "@/components/ErrorAlert";
import { dateIntervalFromToday } from "@/helpers/dateIntervalFromToday";
 
// export const metadata: Metadata = {
//   title: 'Комната для собраний',
//   description: 'Комната для собраний'
// }

interface HttpErrorResponce {
    error: {
        status: number,
        data: {
            statusCode: number,
            message: string
        }
    }
}

export default function Kds() {

    const ROOM_NAME = 'kds'

    let [ifAdd, setIfAdd] = useState(false)

    const addCalendarData = async (entry: CreateEntry): Promise<void> => {
        console.log(entry)
        const result = await addEntry({
            userId: 6,
            roomValue: ROOM_NAME,
            title: entry.title,
            description: entry.description,
            from: entry.from,
            to: entry.to,
            color: entry.color,
            type: entry.type
        })
        if (JSON.parse(JSON.stringify(result)).error) {
            alert(JSON.parse(JSON.stringify(result)).error.data.message)
        }
    }

    const deleteCalendarData = async (id: number): Promise<void> => {
        await deleteEntry(id)
    }

    const [leftDate, setLeftDate] = useState(0)
    const [rightDate, setRightDate] = useState(6)
    const dateSpan = dateIntervalFromToday(leftDate, rightDate, false)
    console.log(dateSpan);
    
    const {data: calendarData, isLoading, error, isSuccess} = entriesApi.useGetRoomEntriesQuery({roomName: ROOM_NAME, fromDate: dateSpan.left, toDate: dateSpan.right})
    const [addEntry, {}] = entriesApi.useAddEntryToRoomMutation()
    const [deleteEntry, {}] = entriesApi.useDeleteEntryFromRoomMutation()
  
  return (
    <>
    <div className="mb-8">
        <h1 className="font-semibold text-3xl">Комната для собраний 👥</h1>
        <p className="text-base mt-2">Здесь вы можете записаться в КДС</p>
        <button className="px-3 py-1 mt-2 border border-gray-50 rounded-md hover:opacity-70 transition-opacity" onClick={() => setIfAdd(!ifAdd)}>Записаться</button>
    </div>
    {
        ifAdd && calendarData && (
            <div className="p-6 lg:w-1/2 w-full mb-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto">
                <AddEntry closeModal={setIfAdd} calendarData={calendarData} setCalendarData={addCalendarData} />
            </div>)
    }

    <div className="flex space-x-3 mb-3 justify-center">
        <button onClick={() => {setLeftDate(leftDate+7); setRightDate(rightDate-7)}} className="rounded-lg bg-gray-700 px-4 py-2">Назад</button>
        <button onClick={() => {setLeftDate(leftDate-7); setRightDate(rightDate+7)}} className="rounded-lg bg-gray-700 px-4 py-2">Вперед</button>
    </div>

    <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 max-w-full overflow-auto">
        { isLoading && <LoadingEventGrid /> }
        { error && <ErrorAlert error={JSON.parse(JSON.stringify(error))} /> }
        { isSuccess && <EventCalendar calendarData={calendarData} deleteCalendarData={deleteCalendarData} leftDate={dateSpan.left} /> }
    </div>
    </>
  )
}