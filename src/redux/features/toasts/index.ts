import ToastType, { ToastDto } from "@/types/toast"
import { createSlice } from "@reduxjs/toolkit"

export const toastsSlice = createSlice({
    name: 'toasts',
    initialState: [] as ToastType[],
    reducers: {
        addToast: (state, {payload}: {payload: ToastDto}) => {
            const id = Math.floor(Date.now()+Math.random()*1000)
            state.push({id, ...payload})
        },
        deleteToast: (state, {payload}: {payload: {id: number}}) => {
            state.forEach(function(el, i) {
                if (el.id == payload.id) state.splice(i, 1)
            })
        }
    }
})