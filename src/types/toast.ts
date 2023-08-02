export default interface ToastType {
    id: number,
    type: 'success' | 'warning' | 'error' | 'info',
    message: string,
    timeout: number
}

export interface ToastDto {
    type: 'success' | 'warning' | 'error' | 'info',
    message: string,
    timeout: number
}