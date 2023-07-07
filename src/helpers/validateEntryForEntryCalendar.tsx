import Entry from "@/types/entry"

function range(start: string, end: string): number[] {
    var ans = [];
    for (let i = Number(start.slice(0, 2)); i <= Number(end.slice(0, 2)); i++) {
        ans.push(i);
    }
    return ans;
};

function timeToNum(time: string): number {
    return Number(time.slice(0, 2))
};

function getEmptySpace(todayEntries: Entry[]): number[] {
    let emptySpace = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    todayEntries.forEach(function(entry: Entry){
        emptySpace = emptySpace.filter(x => !range(entry.time[0], entry.time[1]).includes(x))
        
        
        emptySpace.push(timeToNum(entry.time[0]), timeToNum(entry.time[1])) // Здесь я включаю границу множества, чтобы можно было, например, начинать запись с 05:00,
        // если предыдущая запись закончилась в 05:00
        
    });
    return emptySpace;
};

export default function validateEntryForEntryCalendar(calendarData: Entry[], form: Entry) {
    if (true) {
        if (form.date === form.date) {
            
            if ( Number(form.time[1].slice(0, 2))-Number(form.time[0].slice(0, 2)) <= 6 && Number(form.time[1].slice(0, 2)) > Number(form.time[0].slice(0, 2)) && Number(form.time[0].slice(0, 2)) >= 0 && Number(form.time[1].slice(0, 2)) <= 23 ) {
                
                let todayEntries = calendarData.filter(entry => entry.date === form.date)
                
                if (todayEntries) {
                    let emptySpace = [] as number[]

                    Array.isArray(todayEntries) ? emptySpace = getEmptySpace(todayEntries) : emptySpace = getEmptySpace([todayEntries])

                    if (range(form.time[0], form.time[1]).sort().join(',') === emptySpace.filter(x => range(form.time[0], form.time[1]).includes(x)).sort().join(',')) {
                        return true
                        // this.$emit('addEntry', form) // Добавить запись, которая прошла валидацию
                    } else {
                        return ("Записи перекрывают друг друга")
                    }
                }
            } else {
                return ("Нельзя делать бронь дольше 6 часов или равной нулю")
            }
            //this.$emit('addEntry', form)
        } else {
            return ("Пока что можно бронировать комнату в пределах одного дня")
        }
    } else {
        return ("Вы не зарегистрированы")
    }
}