import User from "./user";
import Wm from "./wm";

export default interface LaundryEntry {
    id: number,
    time: string, // 00:00-02:00
    wmId: number, // 1-6
    date: string, // 2022-08-17
    userId: number, //12345678
    wmInfo: Wm,
    userInfo: User
}

export interface CreateLaundryEntry {
    userId: number,
    time: string,
    wmValue: number,
    status: string,
    date: string,
}