'use client'

import { FunctionComponent } from "react";
import Entry, { CreateEntry } from "@/types/entry";
import { getTodayDate } from "@/helpers/getTodayDate";

interface Props {
    closeModal: Function,
    calendarData: Entry[],
    setCalendarData: Function
}

export const AddEntry: FunctionComponent<Props> = ({closeModal, calendarData, setCalendarData}) => {

    let form: CreateEntry = {
        description: '',
        type: '',
        title: '',
        from: '',
        to: '',
        userId: 0,
        roomValue: '',
        color: 'blue'
    }

    const pushEvent = () => {
        let date = (document.querySelector('#start_date') as HTMLInputElement)?.value
        form.title = (document.querySelector('#title') as HTMLInputElement)?.value
        form.description = (document.querySelector('#description') as HTMLInputElement)?.value
        form.from = date + 'T' + (document.querySelector('#start_time') as HTMLInputElement)?.value
        form.to = date + 'T' + (document.querySelector('#end_time') as HTMLInputElement)?.value
        form.color = (document.querySelector('#color') as HTMLInputElement).value
        form.type = (document.querySelector('#type') as HTMLInputElement).value
        setCalendarData({...form})
    }

    return (
        <form onSubmit={(e) => {e.preventDefault(); pushEvent()}}>

            <div>
                <h2 className="font-semibold text-lg">Название и дата</h2>
                <div className="w-full mt-1">
                    <label className="text-xs text-gray-500" html-for="title">Название</label><br />
                    <input className="inpt" type="text" id="title" name="title" placeholder="Просмотр фильма" maxLength={25} required />
                </div>

                <div className="w-full mt-1">
                    <label className="text-xs text-gray-500" html-for="description">Описание</label><br />
                    <input className="inpt" type="text" id="description" name="description" placeholder="Смотрим Карты, деньги, два ствола" maxLength={50} />
                </div>

                <div className="flex flex-row gap-4 justify-evenly w-full mt-1">
                    <div className="w-1/2">
                        <label className="text-xs text-gray-500" html-for="start_date">Дата</label>
                        <input className="inpt" type="date" id="start_date" name="start_date" defaultValue={getTodayDate()} required />
                    </div>
                    <div className="w-1/2 opacity-70">
                        <label className="text-xs text-gray-500" html-for="end_date">Дата конца</label>
                        <input className="inpt" type="date" disabled id="end_date" name="end_date" required />
                    </div>
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-lg mt-6">Время</h2>
                <div className="flex flex-row gap-4 justify-evenly w-full">
                    <div className="w-1/2">
                        <label className="text-xs text-gray-500" html-for="start_time">Время начала</label><br />
                        <input className="inpt" type="time" id="start_time" name="start_time" required />
                    </div>
                    <div className="w-1/2">
                        <label className="text-xs text-gray-500" html-for="end_time">Время конца</label><br />
                        <input className="inpt" type="time" id="end_time" name="end_time" required />
                    </div>
                </div>

                <h2 className="font-semibold text-lg mt-4">Периодичность и цвет</h2>
                <div className="flex flex-row gap-4 justify-evenly w-full">
                    <div className="w-full">
                        <label className="text-xs text-gray-500" html-for="type">Периодичность</label><br />
                        <select className="inpt" disabled name="type" id="type" required >
                            <option value="one-time">Единоразово</option>
                            <option value="daily">Ежедневно</option>
                            <option value="weekly">Еженедельно</option>
                            <option value="monthly">Ежемесячно</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="text-xs text-slate-500" html-for="color">Цвет</label><br />
                        <select className="inpt" name="color" id="color" required >
                            <option value="blue">Голубой</option>
                            <option value="purple">Фиолетовый</option>
                            <option value="pink">Розовый</option>
                        </select>
                    </div>
                </div>

                <div className="pt-4 space-x-2 w-fit ml-auto">
                    <button className="bg-green-500 text-white px-3 py-2 rounded-md" type="submit">Создать</button>
                    <button className="ml-1 border border-gray-200 px-3 py-2 rounded-md" type="button" onClick={(() => closeModal(false))}>Не, проехали</button>
                </div>
            </div>
        </form>
    )
}