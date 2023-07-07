import React from "react";
import { FunctionComponent } from "react";
import Entry from "@/types/entry";

interface Props {
    calendarData: Entry[]
}

export const EventCalendar: FunctionComponent<Props> = ({calendarData}) => {
    const todayDate = new Date().toLocaleDateString()

    function getDay(skip: number): string {
        const today: Date = new Date()
        var nextDay: Date = new Date(today)
        nextDay.setDate(today.getDate() + Number(skip))
        return nextDay.toLocaleDateString()
    }
    
    return (
        <>
        <div className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
        <div className="overflow-auto grid grid-cols-[70px,repeat(7,164px)] grid-rows-[auto,repeat(24,50px)]">
            
            {/* Calendar frame */}
            <div className="row-start-[1] col-start-[1] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">&lt; &gt;</div>
            <div className="row-start-[1] col-start-[2] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(0)}</div>
            <div className="row-start-[1] col-start-[3] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(1)}</div>
            <div className="row-start-[1] col-start-[4] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(2)}</div>
            <div className="row-start-[1] col-start-[5] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(3)}</div>
            <div className="row-start-[1] col-start-[6] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(4)}</div>
            <div className="row-start-[1] col-start-[7] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(5)}</div>
            <div className="row-start-[1] col-start-[8] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">{getDay(6)}</div>

            <div className="row-start-[2] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                00:00</div>
            <div className="row-start-[2] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[2] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[2] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[2] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[2] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[2] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[2] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>

            <div className="row-start-[3] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                01:00</div>
            <div className="row-start-[3] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[3] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[3] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[3] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[3] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[3] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[3] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>

            <div className="row-start-[4] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                02:00</div>
            <div className="row-start-[4] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[4] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[4] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[4] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[4] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[4] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[4] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>

            <div className="row-start-[5] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                03:00</div>
            <div className="row-start-[5] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[5] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[5] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[5] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[5] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[5] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[5] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>

            <div className="row-start-[6] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                04:00</div>
            <div className="row-start-[6] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[6] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[6] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[6] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[6] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[6] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[6] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[7] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                05:00</div>
            <div className="row-start-[7] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[7] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[7] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[7] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[7] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[7] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[7] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[8] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                06:00</div>
            <div className="row-start-[8] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[8] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[8] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[8] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[8] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[8] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[8] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[9] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                07:00</div>
            <div className="row-start-[9] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[9] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[9] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[9] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[9] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[9] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[9] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[10] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                08:00</div>
            <div className="row-start-[10] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[10] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[10] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[10] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[10] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[10] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[10] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[11] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                09:00</div>
            <div className="row-start-[11] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[11] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[11] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[11] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[11] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[11] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[11] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[12] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                10:00</div>
            <div className="row-start-[12] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[12] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[12] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[12] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[12] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[12] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[12] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[13] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                11:00</div>
            <div className="row-start-[13] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[13] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[13] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[13] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[13] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[13] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[13] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[14] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                12:00</div>
            <div className="row-start-[14] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[14] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[14] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[14] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[14] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[14] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[14] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[15] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                13:00</div>
            <div className="row-start-[15] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[15] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[15] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[15] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[15] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[15] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[15] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[16] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                14:00</div>
            <div className="row-start-[16] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[16] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[16] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[16] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[16] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[16] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[16] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[17] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                15:00</div>
            <div className="row-start-[17] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[17] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[17] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[17] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[17] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[17] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[17] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[18] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                16:00</div>
            <div className="row-start-[18] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[18] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[18] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[18] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[18] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[18] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[18] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[19] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                17:00</div>
            <div className="row-start-[19] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[19] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[19] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[19] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[19] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[19] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[19] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[20] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                18:00</div>
            <div className="row-start-[20] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[20] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[20] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[20] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[20] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[20] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[20] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[21] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                19:00</div>
            <div className="row-start-[21] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[21] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[21] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[21] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[21] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[21] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[21] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>
            
            <div className="row-start-[22] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                20:00</div>
            <div className="row-start-[22] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[22] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[22] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[22] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[22] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[22] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[22] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>

            <div className="row-start-[23] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                21:00</div>
            <div className="row-start-[23] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[23] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[23] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[23] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[23] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[23] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[23] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>

            <div className="row-start-[24] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                22:00</div>
            <div className="row-start-[24] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[24] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[24] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[24] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[24] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[24] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b border-r"></div>
            <div className="row-start-[24] col-start-[8] border-gray-100 dark:border-gray-200/5 border-b"></div>

            <div className="row-start-[25] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium">
                23:00</div>
            <div className="row-start-[25] col-start-[2] border-gray-100 dark:border-gray-200/5 border-r"></div>
            <div className="row-start-[25] col-start-[3] border-gray-100 dark:border-gray-200/5 border-r"></div>
            <div className="row-start-[25] col-start-[4] border-gray-100 dark:border-gray-200/5 border-r"></div>
            <div className="row-start-[25] col-start-[5] border-gray-100 dark:border-gray-200/5 border-r"></div>
            <div className="row-start-[25] col-start-[6] border-gray-100 dark:border-gray-200/5 border-r"></div>
            <div className="row-start-[25] col-start-[7] border-gray-100 dark:border-gray-200/5 border-r"></div>
            <div className="row-start-[25] col-start-[8]"></div>
            
            {/* Calendar contents */}
            {
                calendarData.map((entry) => (
                    <div key={entry.id} className={`row-start-[${Number(Number(entry.time[0].slice(0, 2))+2)}] col-start-[${Number( Math.round(Math.abs(new Date(new Date().toDateString()).getTime()-new Date(entry.date).getTime())/(1000*60*60*24))+2 )}] row-span-${Number(Number(entry.time[1].slice(0, 2)) - Number(entry.time[0].slice(0, 2)))} bg-${entry.color}-400/20 dark:bg-${entry.darkColor}-600/50 border border-${entry.color}-700/10 dark:border-${entry.darkColor}-500 rounded-lg m-1 p-1 flex flex-col transition-all cursor-pointer overflow-auto`}>
                        <span className={`text-xs text-${entry.color}-600 dark:text-${entry.darkColor}-100`}>{entry.time[0]} - {entry.time[1]}</span>
                        <span className={`text-xs font-medium text-${entry.color}-600 dark:text-${entry.darkColor}-100`}>{entry.title}</span>
                        <span className={`text-xs text-${entry.color}-600 dark:text-${entry.darkColor}-100`}>{entry.username}</span>
                    </div>
                ))
            }
        </div>
        </div>
        </>
    )
}