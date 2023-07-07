import { emit } from "process";
import { FunctionComponent } from "react";

export const AddEntry: FunctionComponent = () => {
    return (
        <form>
            <h2 className="font-semibold text-lg">Название и дата</h2>
            
            <div className="w-full">
                <label className="text-xs text-gray-500" html-for="title">Название</label><br />
                <input className="inpt" type="text" id="title" name="title" placeholder="Название мероприятия" required />
            </div>

            <div className="flex flex-row gap-4 justify-evenly w-full">
                <div className="w-1/2">
                    <label className="text-xs text-gray-500" html-for="start_date">Дата начала</label>
                    <input className="inpt" type="date" value="form.start_date" id="start_date" name="start_date" required />
                </div>
                <div className="w-1/2">
                    <label className="text-xs text-gray-500" html-for="end_date">Дата конца</label>
                    <input className="inpt" type="date" id="end_date" name="end_date" required />
                </div>
            </div>

            <h2 className="font-semibold text-lg mt-4">Время</h2>
            <div className="flex flex-row gap-4 justify-evenly w-full">
                <div className="w-1/2">
                    <label className="text-xs text-gray-500" html-for="start_time">Время начала</label><br />
                    <input className="inpt" type="time" value="form.start_time" id="start_time" name="start_time" step="3600" required />
                </div>
                <div className="w-1/2">
                    <label className="text-xs text-gray-500" html-for="end_time">Время конца</label><br />
                    <input className="inpt" type="time" value="form.end_time" id="end_time" name="end_time" step="3600" required />
                </div>
            </div>

            <h2 className="font-semibold text-lg mt-4">Периодичность и цвет</h2>
            <div className="flex flex-row gap-4 justify-evenly w-full">
                <div className="w-full">
                    <label className="text-xs text-gray-500" html-for="repeat">Периодичность</label><br />
                    <select className="inpt" disabled name="type" id="repeat" required >
                        <option value="no-repeat">Не повторять</option>
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

            <div className="mt-4 w-fit ml-auto">
                <button className="bg-green-500 text-white px-3 py-2 rounded-md" type="submit">Создать</button>
                <button className="ml-1 border border-gray-200 px-3 py-2 rounded-md">Не, проехали</button>
            </div>
        </form>
        // <form onSubmit={validateDateTime(form, scheduleData)}>
        //     <h2 className="font-semibold text-lg">Название и дата</h2>
            
        //     <div className="w-full">
        //         <label className="text-xs text-gray-500" html-for="title">Название</label><br />
        //         <input className="inpt" type="text" id="title" name="title" onChange={() => } placeholder="Название мероприятия" required />
        //     </div>

        //     <div className="flex flex-row gap-4 justify-evenly w-full">
        //         <div className="w-1/2">
        //             <label className="text-xs text-gray-500" html-for="start_date">Дата начала</label>
        //             <input className="inpt" type="date" value="form.start_date" v-model=form.start_date id="start_date" name="start_date" required />
        //         </div>
        //         <div className="w-1/2">
        //             <label className="text-xs text-gray-500" html-for="end_date">Дата конца</label>
        //             <input className="inpt" type="date" v-model=form.end_date id="end_date" name="end_date" required />
        //         </div>
        //     </div>

        //     <h2 className="font-semibold text-lg mt-4">Время</h2>
        //     <div className="flex flex-row gap-4 justify-evenly w-full">
        //         <div className="w-1/2">
        //             <label className="text-xs text-gray-500" html-for="start_time">Время начала</label><br />
        //             <input className="inpt" type="time" value="form.start_time" v-model=form.start_time id="start_time" name="start_time" step="3600" required />
        //         </div>
        //         <div className="w-1/2">
        //             <label className="text-xs text-gray-500" html-for="end_time">Время конца</label><br />
        //             <input className="inpt" type="time" value="form.end_time" v-model=form.end_time id="end_time" name="end_time" step="3600" required />
        //         </div>
        //     </div>

        //     <h2 className="font-semibold text-lg mt-4">Периодичность и цвет</h2>
        //     <div className="flex flex-row gap-4 justify-evenly w-full">
        //         <div className="w-full">
        //             <label className="text-xs text-gray-500" html-for="repeat">Периодичность</label><br />
        //             <select className="inpt" disabled name="type" id="repeat" v-model=form.periodic required >
        //                 <option value="no-repeat">Не повторять</option>
        //                 <option value="daily">Ежедневно</option>
        //                 <option value="weekly">Еженедельно</option>
        //                 <option value="monthly">Ежемесячно</option>
        //             </select>
        //         </div>

        //         <div className="w-full">
        //             <label className="text-xs text-slate-500" html-for="color">Цвет</label><br />
        //             <select className="inpt" name="color" id="color" v-model=form.color required >
        //                 <option value="blue">Голубой</option>
        //                 <option value="purple">Фиолетовый</option>
        //                 <option value="pink">Розовый</option>
        //             </select>
        //         </div>
        //     </div>

        //     <div className="mt-4 w-fit ml-auto">
        //         <button className="bg-green-500 text-white px-3 py-2 rounded-md" type="submit">Создать</button>
        //         <button className="ml-1 border border-gray-200 px-3 py-2 rounded-md" onClick={"$emit('closeModal')"}>Не, проехали</button>
        //     </div>
        // </form>
    )
}