export const lastDay = (items) => {
    let result = new Date(1999, 10, 10);
    for (let item of items) {
        if (new Date(item.date) > result) {
            result = new Date(item.date)
        }
    }
    return result;
}