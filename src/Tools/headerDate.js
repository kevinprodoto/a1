export const headerDate = (name, items, to, from) => {
    let result = false;
    for (let item of items) {
        if (item.ticker === name && new Date(item.date) >= from && new Date(item.date) <= to) {
            result = true;
        }
    }
    return result;
}