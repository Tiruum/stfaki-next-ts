export default function numberToTime(time: number): string {
    if (!!time) {
        switch (time) {
            case 1:
                return "00:00 - 02:00"
            case 2:
                return "02:40 - 04:40"
            case 3:
                return "05:20 - 07:20"
            case 4:
                return "08:00 - 10:00"
            case 5:
                return "10:40 - 12:40"
            case 6:
                return "13:20 - 15:20"
            case 7:
                return "16:00 - 18:00"
            case 8:
                return "18:40 - 20:40"
            case 9:
                return "21:20 - 23:20"
            default:
                throw new Error("Неправильное время")
        }
    } else {
        throw new Error("Неправильное время")
    }
}