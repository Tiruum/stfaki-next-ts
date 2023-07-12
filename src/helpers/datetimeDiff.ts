export default function datetimeDiff(date1: string, date2 = new Date().toLocaleString("ru-EU", {timeZone: 'Europe/Moscow'}).replace(/(\d{2}\1).(\d{2}\2).(\d{4}\3), (\d{2}\4)/, "$3-$2-$1T$4") as string) {
    (/\d{4}\-\d{2}\-\d{2}\T\d{2}:\d{2}/).test(date1)

    if ((/\d{4}\-\d{2}\-\d{2}\T\d{2}:\d{2}/.test(date1)) && (/\d{4}\-\d{2}\-\d{2}\T\d{2}:\d{2}/.test(date2))) {
        return (new Date(date1).getTime() - new Date(date2).getTime())
    } else {
        throw new Error(`Invalid date or dates:\nDate1: ${date1}\nDate2: ${date2}`)
    }
}