"use client";

import { LaundryCalendar } from "@/components/LaundryCalendar"
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedDateModule } from "@/redux/features/selectDate/selector";
import { selectedDateSlice } from "@/redux/features/selectDate";
import LoadingLaundryGrid from "@/components/LaundryCalendar/LoadingLaundryGrid";
import LaundryEntry from "@/types/laundryEntry";
import { laundryEntriesApi } from "@/redux/services/laundryEntriesApi";
import datetimeDiff from "@/helpers/datetimeDiff";
import { ErrorAlert } from "@/components/ErrorAlert";
import { useCookies } from "react-cookie";
import { useAuthUser } from "@/hooks/useAuthUser";
import { authApi } from "@/redux/services/authApi";
import useToasts from "@/hooks/useToasts";

export default function LaundryPage() {

    const [cookies, setCookie, removeCookies] = useCookies(['user'])
    let loggedUser = useAuthUser(cookies)

    const addEntry = async (entry: {w: number, h: number}, time: string) => {
        if (!!loggedUser?.id) {
            const dublicat = calendarData.find(function(entryByDay: LaundryEntry) {
                return (entryByDay.wmInfo.value === entry.h) && (entryByDay.time === time)
            })
            if (!!!dublicat && !!entry.h && datetimeDiff(selectedDate + 'T' + time.slice(0, 5)) > 0 && !!userInfo) {
                if (Number(userInfo?.balance) < Number(wms?.find((wm) => wm.value === entry.h)?.price)) {
                    addToast({type: 'warning', message: "Недостаточно средств", timeout: 5000})
                } else {
                    await addLaundryEntry({
                        userId: loggedUser.id,
                        time: time,
                        wmValue: entry.h,
                        status: "booked",
                        date: selectedDate,
                    })
                    changeUserInfo({...userInfo, balance: Number(userInfo?.balance) - Number(wms?.find((wm) => wm.value === entry.h)?.price)})
                    addToast({type: 'success', message: "Запись создана", timeout: 3000})
                }
            } else if (datetimeDiff(selectedDate + 'T' + time.slice(0, 5)) <= 0) {
                addToast({type: 'warning', message: "Запись на это время окончена", timeout: 5000})
            } else {
                addToast({type: 'error', message: "Такая запись уже существует", timeout: 5000})
            }
        } else {
            addToast({type: 'error', message: "Вы не зарегистрированы", timeout: 5000})
        }
    }

    const deleteEntry = async (entry: LaundryEntry) => {
        if (!!loggedUser?.id) {
            if ((entry.userId === loggedUser.id) && (datetimeDiff(entry.date + 'T' + entry.time.slice(0, 5)) > 0)) {
                confirm(`Вы действительно хотите удалить запись в стиральную машину №${entry.wmInfo.value} на ${entry.time}?`)
                await deleteLaundryEntry(entry.id)
                changeUserInfo({...userInfo, balance: Number(userInfo?.balance) + Number(wms?.find((wm) => wm.value === entry.wmInfo.value)?.price)})
                addToast({type: 'info', message: "Запись удалена", timeout: 3000})
            } else {
                addToast({type: 'error', message: "Вы не можете удалить эту запись", timeout: 5000})
            }
        } else {
            addToast({type: 'error', message: "Вы не зарегистрированы", timeout: 5000})
        }
    }

    let selectedDate = useSelector((state: {selectedDate: string}) => selectSelectedDateModule(state)) // Получить дату
    const dispatch = useDispatch()
    const {data: calendarData, isLoading, error} = laundryEntriesApi.useGetLaundryEntriesByDateQuery(selectedDate) // Получить все записи на выбранную дату
    const [addLaundryEntry, {}] = laundryEntriesApi.useAddLaundryEntryMutation() // Создание записи
    const [deleteLaundryEntry, {}] = laundryEntriesApi.useDeleteLaundryEntryMutation() // Удаление записи
    const {data: wms, isLoading: isLoadingWms, error: errorWms, isSuccess: isSuccessWms} = laundryEntriesApi.useGetWmsQuery()
    const {addToast} = useToasts()

    const {data: userInfo} = authApi.useGetUserInfoQuery(loggedUser?.id, { skip: !!!loggedUser?.id })
    const [changeUserInfo, {}] = authApi.useChangeUserInfoMutation()
    return (
    <>
        <div className="mb-8">
            <h1 className="font-semibold text-3xl">Прачечная 🧺</h1>
            <p className="text-base mt-2">Здесь вы можете постирать свои грязные шмотки</p>
        </div>
        <div className="rounded-xl px-6 py-1 w-fit mx-auto mb-2 bg-white dark:bg-gray-700 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
            <input onChange={(e) => dispatch(selectedDateSlice.actions.selectDate(e.target.value))} className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 focus-visible:outline-none" type="date" defaultValue={selectedDate} />
        </div>
        <div className="rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm shadow-gray-200/50 dark:shadow-black/50 overflow-auto">
        { isLoading && isLoadingWms && <LoadingLaundryGrid /> }
        { error || errorWms && <ErrorAlert error={JSON.parse(JSON.stringify(error))} /> }
        { calendarData && isSuccessWms && <LaundryCalendar calendarData={calendarData} addEntry={addEntry} deleteEntry={deleteEntry} wms={wms} selectedDate={selectedDate} /> }
        </div>
    </>
    )
}