export default function timeToNumber(time: string): number {
    if (!!time) {
        switch (time) {
            case "00:00 - 02:00":
                return 1
            case "02:40 - 04:40":
                return 2
            case "05:20 - 07:20":
                return 3
            case "08:00 - 10:00":
                return 4
            case "10:40 - 12:40":
                return 5
            case "13:20 - 15:20":
                return 6
            case "16:00 - 18:00":
                return 7
            case "18:40 - 20:40":
                return 8
            case "21:20 - 23:20":
                return 9
            default:
                throw new Error("Неправильное время")  
        }
    }
    else {
        throw new Error("Неправильное время")
    }
}