import User from "./user"

export default interface Entry {
    id: number,
    from: string,
    to: string,
    title: string,
    description: string,
    color: string,
    type: string,
    userId: number,
    userInfo: User
}

export interface CreateEntry {
    userId: number,
    roomValue: string,
    title: string,
    description: string,
    from: string,
    to: string,
    color: string,
    type: string
}