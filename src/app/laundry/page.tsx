"use client";

import { LaundryCalendar } from "@/components/LaundryCalendar"
import { Metadata } from 'next'
import LaundryEntry from "@/types/laundryEntry"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedDateModule } from "@/redux/features/selectDate/selector";
import { selectedDateSlice } from "@/redux/features/selectDate";
import { useGetLaundryEntriesQuery } from "@/redux/services/laundryEntriesApi";
 
// export const metadata: Metadata = {
//   title: 'Прачечная',
//   description: 'Стиральная комната',
// }

export default function Laundry() {
  function numberToTime(time: number) {
    switch (time) {
        case 1:
            return "00:00 - 02:00"
        case 2:
            return "02:40 - 04:40"
        case 3:
            return "05:20 - 07:20"
        case 4:
            return "08:00 - 10:00"
        case 5:
            return "10:40 - 12:40"
        case 6:
            return "13:20 - 15:20"
        case 7:
            return "16:00 - 18:00"
        case 8:
            return "18:40 - 20:40"
        case 9:
            return "21:20 - 23:20"
    }
  };

  function getDay(skip: number) {
      const today = new Date()
      var nextDay = new Date(today)
      nextDay.setDate(today.getDate() + Number(skip))
      return nextDay.toLocaleDateString()
  }
//   let selectedDate = new Date().toLocaleDateString()
  let [calendarData, setCalendarData] = useState<LaundryEntry[]>([])
  let selectedDate = useSelector((state: {selectedDate: string}) => selectSelectedDateModule(state))
  const dispatch = useDispatch()
  const {data, isLoading, error} = useGetLaundryEntriesQuery()
  console.log(data)
  return (
    <>
      <div className="mb-8">
          <h1 className="font-semibold text-3xl">Прачечная 🧺</h1>
          <p className="text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="rounded-xl px-6 py-1 w-fit mx-auto mb-2 bg-white dark:bg-gray-700 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
          <input onChange={(e) => dispatch(selectedDateSlice.actions.selectDate(e.target.value))} className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 focus-visible:outline-none" type="date" defaultValue={selectedDate} />
      </div>
      <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
          <LaundryCalendar selectedDate={selectedDate} calendarData={calendarData} setCalendarData={setCalendarData} />
      </div>
    </>
  )
}