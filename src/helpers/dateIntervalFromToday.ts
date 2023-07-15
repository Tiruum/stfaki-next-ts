export const dateIntervalFromToday = (leftDist: number, rightDist: number, includeTime: boolean): {left: string, right: string} => (
    includeTime ?
    {left: new Date(new Date().setDate(new Date().getDate()-leftDist)).toLocaleDateString('eu-RU', {timeZone: "Europe/Moscow"}).replace(/(\d{2}\1)\.(\d{2}\2)\.(\d{4}\3)/, "$3-$2-$1")+'T00:00:00.000Z',
    right: new Date(new Date().setDate(new Date().getDate()+rightDist)).toLocaleDateString('eu-RU', {timeZone: "Europe/Moscow"}).replace(/(\d{2}\1)\.(\d{2}\2)\.(\d{4}\3)/, "$3-$2-$1")+'T00:00:00.000Z'}
    :
    {left: new Date(new Date().setDate(new Date().getDate()-leftDist)).toLocaleDateString('eu-RU', {timeZone: "Europe/Moscow"}).replace(/(\d{2}\1)\.(\d{2}\2)\.(\d{4}\3)/, "$3-$2-$1"),
    right: new Date(new Date().setDate(new Date().getDate()+rightDist)).toLocaleDateString('eu-RU', {timeZone: "Europe/Moscow"}).replace(/(\d{2}\1)\.(\d{2}\2)\.(\d{4}\3)/, "$3-$2-$1")}
)