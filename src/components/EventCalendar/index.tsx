import React from "react";
import { FunctionComponent } from "react";
import Entry from "@/types/entry";
import { colorToDarkColor } from "@/helpers/colorToDarkColor";

interface Props {
    calendarData: Entry[],
    deleteCalendarData: Function,
    leftDate: string
}

export const EventCalendar: FunctionComponent<Props> = ({calendarData, deleteCalendarData, leftDate}) => {
    const todayDate = new Date().toLocaleDateString()

    function getDay(skip: number): string {
        const today: Date = new Date(leftDate)
        var nextDay: Date = new Date(today)
        nextDay.setDate(today.getDate() + Number(skip))
        return nextDay.toLocaleDateString()
    }

    const times = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
    
    return (
        <>
        <div className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
        <div className="overflow-auto grid grid-cols-[70px,repeat(7,164px)] grid-rows-[auto,repeat(24,50px)]">
            
            {/* Calendar frame */}
            <div className="row-start-[1] col-start-[1] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center"></div>
            <div className="row-start-[1] col-start-[2] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(0)}</div>
            <div className="row-start-[1] col-start-[3] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(1)}</div>
            <div className="row-start-[1] col-start-[4] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(2)}</div>
            <div className="row-start-[1] col-start-[5] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(3)}</div>
            <div className="row-start-[1] col-start-[6] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(4)}</div>
            <div className="row-start-[1] col-start-[7] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(5)}</div>
            <div className="row-start-[1] col-start-[8] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(6)}</div>

            {
                times.map((time, index) => (
                    <React.Fragment key={time}>
                        <div className={`row-start-[${index+2}] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium`}>{time}</div>
                        <div className={`row-start-[${index+2}] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r`}></div>
                        <div className={`row-start-[${index+2}] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r`}></div>
                        <div className={`row-start-[${index+2}] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r`}></div>
                        <div className={`row-start-[${index+2}] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r`}></div>
                        <div className={`row-start-[${index+2}] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r`}></div>
                        <div className={`row-start-[${index+2}] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r`}></div>
                        <div className={`row-start-[${index+2}] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b`}></div>
                    </React.Fragment>
                ))
            }
            
            {/* Calendar contents */}
            {
                calendarData.map((entry) => (
                    <div onClick={() => deleteCalendarData(entry)} key={entry.id} className={`row-start-[${Number(Number(entry.from.slice(11, 13))+2)}] col-start-[${Number( Math.round(Math.abs(new Date(new Date(leftDate).toDateString()).getTime()-new Date(entry.from.slice(0, 10)).getTime())/(1000*60*60*24))+2 )}] row-span-${Number(Number(entry.to.slice(11, 13)) - Number(entry.from.slice(11, 13)))} bg-${entry.color}-400/20 dark:bg-${colorToDarkColor(entry.color)}-600/50 border border-${entry.color}-700/10 dark:border-${colorToDarkColor(entry.color)}-500 rounded-lg m-1 p-1 flex flex-col transition-all cursor-pointer overflow-auto`}>
                        <span className={`text-xs text-${entry.color}-600 dark:text-${colorToDarkColor(entry.color)}-100`}>{entry.from.slice(11, 16)} - {entry.to.slice(11, 16)}</span>
                        <span className={`text-xs font-medium text-${entry.color}-600 dark:text-${colorToDarkColor(entry.color)}-100`}>{entry.title}</span>
                        <span className={`text-xs text-${entry.color}-600 dark:text-${colorToDarkColor(entry.color)}-100`}>{entry.userInfo.username}</span>
                    </div>
                ))
            }
        </div>
        </div>
        </>
    )
}