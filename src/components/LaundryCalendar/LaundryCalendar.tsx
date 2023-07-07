import React from "react";
import { FunctionComponent } from "react";

interface LaundryEntry {
    id: string, // 2022-08-17_time_washing-machine-number
    time: string, // 00:00-02:00
    wmn: number, // 1-6
    date: string, // 2022-08-17
    username: string, // Тимур Селин
    userId?: string //12345678
    status: "active" | "closed" | "passed"
};

interface Props {
    calendarData: LaundryEntry[],
    selectedDate: string
}

export const LaundryCalendar: FunctionComponent<Props> = ({calendarData, selectedDate}) => {
    const times= ['00:00 - 02:00',
        '02:40 - 04:40',
        '05:20 - 07:20',
        '08:00 - 10:00',
        '10:40 - 12:40',
        '13:20 - 15:20',
        '16:00 - 18:00',
        '18:40 - 20:40',
        '21:20 - 23:20'];
    
    function deleteEntry(): undefined {
        // console.log('func: deleteEntry');
    }

    function addEntry(obj: object, time: string): undefined {
        // console.log('func: addEntry');
        
        // if (new Date(this.selectedDate.split('.').reverse().join('-') + ' ' + time.split(' - ')[0]) > new Date()) {
        //     this.$emit('addEntry', obj)
        // } else {
        //     useToastStore().addToast({
        //         type: "error",
        //         message: "На это время нельзя записаться",
        //         timeout: 4000
        //     })
        // }
    }
    return (
        <>
        <div className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden w-fit">
            <div className="overflow-auto w-fit grid grid-cols-[100px,repeat(6,186px)] grid-rows-[auto,repeat(9,50px)]">
                {/* Calendar frame */}
                <div className="row-start-[1] col-start-[1] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">&lt;&gt;</div>
                <div className="row-start-[1] col-start-[2] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">1</div>
                <div className="row-start-[1] col-start-[3] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">2</div>
                <div className="row-start-[1] col-start-[4] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">3</div>
                <div className="row-start-[1] col-start-[5] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">4</div>
                <div className="row-start-[1] col-start-[6] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">5</div>
                <div className="row-start-[1] col-start-[7] sticky top-0 z-20 bg-white dark:bg-gray-700 border-gray-100 dark:border-black/10 bg-clip-padding text-gray-900 dark:text-gray-200 border-b text-sm font-medium py-2 text-center">6</div>

                {
                    times.map((time, index) => (
                        <React.Fragment key={Number(index)}>
                            <div key={Number(index+1) + '_1'} className={`row-start-[${Number(index+2)}] col-start-[1] border-gray-100 dark:border-gray-200/5 border-r text-xs p-1.5 text-right text-gray-400 uppercase sticky left-0 bg-white dark:bg-gray-800 font-medium`}>
                                {time}</div>
                            <div onClick={addEntry({w: Number(index+1), h: 1}, time)} key={Number(index+2) + '_2'} className={`row-start-[${Number(index+2)}] col-start-[2] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer`}></div>
                            <div onClick={addEntry({w: Number(index+1), h: 2}, time)} key={Number(index+2) + '_3'} className={`row-start-[${Number(index+2)}] col-start-[3] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer`}></div>
                            <div onClick={addEntry({w: Number(index+1), h: 3}, time)} key={Number(index+2) + '_4'} className={`row-start-[${Number(index+2)}] col-start-[4] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer`}></div>
                            <div onClick={addEntry({w: Number(index+1), h: 4}, time)} key={Number(index+2) + '_5'} className={`row-start-[${Number(index+2)}] col-start-[5] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer`}></div>
                            <div onClick={addEntry({w: Number(index+1), h: 5}, time)} key={Number(index+2) + '_6'} className={`row-start-[${Number(index+2)}] col-start-[6] border-gray-100 dark:border-gray-200/5 border-b border-r cursor-pointer`}></div>
                            <div onClick={addEntry({w: Number(index+1), h: 6}, time)} key={Number(index+2) + '_7'} className={`row-start-[${Number(index+2)}] col-start-[7] border-gray-100 dark:border-gray-200/5 border-b cursor-pointer`}></div>
                        </React.Fragment>
                    ))
                }

                
                {
                    calendarData.map((entry: LaundryEntry) => (
                        <div onClick={deleteEntry} key={entry.id} className={`row-start-[${Number(entry.time + 1)}] col-start-[${Number(entry.wmn + 1)}] row-span-1 col-span-1 border rounded-lg m-1 p-1 flex flex-col ${entry.status === 'active' ? 'bg-blue-400/20 dark:bg-sky-600/50 border-blue-700/10 dark:border-sky-500 cursor-pointer' : 'bg-gray-400/20 dark:bg-gray-600/50 border-gray-700/10 dark:border-gray-500 cursor-not-allowed'}`}>
                            <span className="text-xs text-center my-auto font-medium text-blue-600 dark:text-sky-100">{entry.username}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}