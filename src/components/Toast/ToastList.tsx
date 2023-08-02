import { Toast } from "./Toast"
import useToasts from "@/hooks/useToasts"

export const ToastList = () => {
    const {toasts, addToast} = useToasts()
    return (
        <div className="fixed top-5 right-5 transition-all z-[21]">
            {toasts.map(toast => <Toast key={toast.id} toast={toast} />)}
        </div>
    )
}