import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const selectedDateSlice = createSlice({
    name: 'selectedDate',
    initialState: new Date().toLocaleDateString("ru-EU", {timeZone: "Europe/Moscow"}).replace(/(\d{2}\1)\.(\d{2}\2)\.(\d{4}\3)/, "$3-$2-$1"),
    reducers: {
        selectDate: (state, {payload}) => {
            state = new Date(payload).toLocaleDateString("ru-EU", {timeZone: "Europe/Moscow"}).replace(/(\d{2}\1)\.(\d{2}\2)\.(\d{4}\3)/, "$3-$2-$1")
            return state
        }
    }
});