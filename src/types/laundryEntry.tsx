export default interface LaundryEntry {
    id: string, // 2022-08-17_time_washing-machine-number
    time: string, // 00:00-02:00
    wmn: number, // 1-6
    date: string, // 2022-08-17
    username: string, // Тимур Селин
    userId?: string //12345678
    status: "active" | "closed" | "passed"
}