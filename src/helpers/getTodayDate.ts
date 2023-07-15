export const getTodayDate = (timezone = "Europe/Moscow" as string): string => {
    return new Date().toLocaleDateString("eu-RU", {timeZone: timezone}).replace(/(\d{2}\1)\.(\d{2}\2)\.(\d{4}\3)/, "$3-$2-$1")
}