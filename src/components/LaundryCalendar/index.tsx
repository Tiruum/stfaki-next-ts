"use client";

import React, { useState } from "react";
import { FunctionComponent } from "react";
import LaundryEntry from "@/types/laundryEntry";
import datetimeDiff from "@/helpers/datetimeDiff";
import timeToNumber from "@/helpers/timeToNumber";
import Wm from "@/types/wm";

interface Props {
    calendarData: LaundryEntry[],
    addEntry: Function,
    deleteEntry: Function,
    wms: Wm[],
    selectedDate: string
}

export const LaundryCalendar: FunctionComponent<Props> = ({calendarData, addEntry, deleteEntry, wms, selectedDate}) => {
    const times= ['00:00 - 02:00',
        '02:40 - 04:40',
        '05:20 - 07:20',
        '08:00 - 10:00',
        '10:40 - 12:40',
        '13:20 - 15:20',
        '16:00 - 18:00',
        '18:40 - 20:40',
        '21:20 - 23:20'];
    
    return (
        <>
        <div className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden w-fit">
            <div className={`overflow-auto w-fit grid grid-cols-[100px,repeat(${wms.length},186px)] grid-rows-[auto,repeat(${times.length},50px)]`}>
                {/* Calendar frame */}

                {/* Вывод строки номеров стиральных машин */}
                <div className="row-start-[1] col-start-[1] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center"></div>
                {wms.map((wm) => <div key={wm.value} className={`row-start-[1] col-start-[${wm.value+1}] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center`}>{wm.value}</div>)}
                
                {/* Вывод столбца времени */}
                {times.map((time, index) => <div key={`${time}`} className={`sticky left-0 row-start-[${Number(index+2)}] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium`}>{time}</div>)}
                
                {/* Вывод сетки */}
                {
                    times.map((time, index) => (
                        wms.map((wm, wmIndex) => (
                            <React.Fragment key={`${wm.value}_${time}`}>
                                <div onClick={() => addEntry({w: Number(index+1), h: wm.value}, time)} className={`row-start-[${Number(index+2)}] col-start-[${wm.value+1}] ${new Date() >= new Date(selectedDate+'T'+time.slice(0, 5)) ? 'border-red-100 dark:border-red-500/10 cursor-not-allowed' : 'border-gray-100 dark:border-gray-200/5 cursor-pointer'} border-b border-r`}></div>
                            </React.Fragment>
                        ))
                    ))
                }
                
                {
                    calendarData.map((entry: LaundryEntry) => (
                        entry &&
                        <div key={entry.id} onClick={() => deleteEntry(entry)} className={`row-start-[${ !!entry && typeof entry.time === 'string' && (Number(timeToNumber(entry.time) + 1))}] col-start-[${Number(entry.wmInfo.value+1)}] row-span-1 col-span-1 border rounded-lg m-1 p-1 flex flex-col ${datetimeDiff(entry.date + 'T' + entry.time.slice(0, 5)) > 0 ? 'bg-blue-400/20 dark:bg-sky-600/50 border-blue-700/10 dark:border-sky-500 cursor-pointer' : 'bg-gray-400/20 dark:bg-gray-600/50 border-gray-700/10 dark:border-gray-500 cursor-not-allowed'}`}>
                            <span className="text-xs text-center my-auto font-medium text-blue-600 dark:text-sky-100">{entry.userInfo.username} ({entry.wmInfo.value})</span>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}