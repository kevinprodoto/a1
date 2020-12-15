export const firstDay = (items) => {
    let result = new Date();
    for (let item of items) {
        if (new Date(item.date) < result) {
            result = new Date(item.date)
        }
    }
    return result;
}