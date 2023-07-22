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

    function timeToMinutes(time: string): number {
        return Number(time.slice(0, 2))*60+Number(time.slice(3, 5))
    }

    function getDay(skip: number): string {
        const today: Date = new Date(leftDate)
        var nextDay: Date = new Date(today)
        nextDay.setDate(today.getDate() + Number(skip))
        return nextDay.toLocaleDateString()
    }

    const times = Array(25).fill(0).map((element, index) => index)
    
    return (
        <>
        <div className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
        <div className="overflow-auto grid grid-cols-[70px,repeat(7,164px)] grid-rows-[auto,repeat(25,60px)] relative">
            
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
                        <div className={`row-start-[${index+2}] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium`}>{Math.floor(time / 10) == 0 ? `0${time}:00` : `${time}:00` }</div>
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
                    <div style={
                        {width: `${164-8}px`,
                        height: `${(timeToMinutes(entry.to.slice(11, 16))-timeToMinutes(entry.from.slice(11, 16))) <= 0 ? 0 : (timeToMinutes(entry.to.slice(11, 16))-timeToMinutes(entry.from.slice(11, 16))-6)}px`,
                        top: `${timeToMinutes(entry.from.slice(11, 16))+36}px`,
                        margin: '0.2rem'}
                        } onClick={() => deleteCalendarData(entry)} key={entry.id} className={`absolute col-start-[${Number( Math.round(Math.abs(new Date(new Date(leftDate).toDateString()).getTime()-new Date(entry.from.slice(0, 10)).getTime())/(1000*60*60*24))+2 )}] bg-${entry.color}-400/20 dark:bg-${colorToDarkColor(entry.color)}-600/50 border border-${entry.color}-700/10 dark:border-${colorToDarkColor(entry.color)}-500 rounded-lg p-1 flex flex-col transition-all cursor-pointer overflow-auto`}>
                        <span className={`text-xs text-${entry.color}-600 dark:text-${colorToDarkColor(entry.color)}-100`}>{entry.from.slice(11, 16)} - {entry.to.slice(11, 16)}</span>
                        <span className={`text-xs font-medium text-${entry.color}-600 dark:text-${colorToDarkColor(entry.color)}-100`}>{entry.title}</span>
                        <span className={`text-xs text-${entry.color}-600 dark:text-${colorToDarkColor(entry.color)}-100`}>{entry.userInfo.username}</span>
                    </div>
                ))

                // <div style={style} className={`absolute col-start-[${Number( Math.round(Math.abs(new Date(new Date().toDateString()).getTime()-new Date(date.slice(0, 10)).getTime())/(1000*60*60*24))+2 )}] row-span-${Number(Number(end.slice(0, 2)) - Number(start.slice(0, 2)))} bg-blue-400/20 dark:bg-sky-600/50 border border-blue-700/10 dark:border-sky-500 rounded-lg p-1 flex flex-col transition-all cursor-pointer overflow-auto`}>
                //     <span className={`text-xs text-blue-600 dark:text-sky-100`}>{start} - {end}</span>
                //     <span className={`text-xs font-medium text-blue-600 dark:text-sky-100`}>Просмотр фильма</span>
                //     <span className={`text-xs text-blue-600 dark:text-sky-100`}>Тимур Селин</span>
                // </div>
            }
        </div>
        </div>
        </>
    )
}