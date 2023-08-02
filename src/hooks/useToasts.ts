import { toastsSlice } from "@/redux/features/toasts"
import { selectToastsModule } from "@/redux/features/toasts/selector"
import ToastType, { ToastDto } from "@/types/toast"
import { useDispatch, useSelector } from "react-redux"

const useToasts = () => {
    const dispatch = useDispatch()
    const toasts = useSelector((state: {toasts: ToastType[]}) => selectToastsModule(state))
    const addToast = ({type, message, timeout}: ToastDto) => dispatch(toastsSlice.actions.addToast({type, message, timeout}))
    const deleteToast = (id: number) => dispatch(toastsSlice.actions.deleteToast({id}))

    return {toasts, addToast, deleteToast}
}

export default useToasts