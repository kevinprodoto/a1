export const checkDate = (item, to, from, name) => {
    if (new Date(item.date) <= to && new Date(item.date) >= from && item.ticker === name) {
        
        return true;
    } else {
        return false;
    }
}