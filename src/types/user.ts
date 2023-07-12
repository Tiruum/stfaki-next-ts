export default interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    balance: number,
    banned: boolean,
    banReason: string | null,
}