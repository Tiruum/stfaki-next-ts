export const logger = (store: any) => (next: any) => (action: any) => {
    console.log(action);
    next(action); // Пропускает action в следующий middleware или, если больше middleware'ов нет, то в dispatch
};