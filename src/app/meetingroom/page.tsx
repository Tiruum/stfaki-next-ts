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
import { useCookies } from "react-cookie";
import { useAuthUser } from "@/hooks/useAuthUser";
 
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

export default function MeetingRoom() {

    const [cookies, setCookie, removeCookies] = useCookies(['user'])
    let loggedUser = useAuthUser(cookies)

    const ROOM_NAME = 'meetingroom'

    let [ifAdd, setIfAdd] = useState(false)

    const addCalendarData = async (entry: CreateEntry): Promise<void> => {
        if (!!loggedUser?.id) {
            console.log(entry)
            const result = await addEntry({
                userId: loggedUser.id,
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
            } else {
                alert("Запись успешно создана!")
            }
        } else {
            alert('Вы не зарегистрированы')
        }
    }

    const deleteCalendarData = async (entry: Entry): Promise<void> => {
        if (!!loggedUser?.id) {
            if ((loggedUser.id === entry.userId) || (loggedUser.roles.value === 'admin')) {
                if (confirm("Вы действительно хотите удалить эту запись?")) await deleteEntry(entry.id)
            } else {
                alert("Вы не можете удалить чужую запись")
            }
        } else {
            alert('Вы не зарегистрированы')
        }
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
        <h1 className="font-semibold text-3xl">Переговорная 📞</h1>
        <p className="text-base mt-2">Здесь вы можете устраивать важные созвоны</p>
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