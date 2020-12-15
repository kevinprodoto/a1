export const changeDate = (to, from, itemDate) => {
    if (itemDate >= to && itemDate <= from) {
        return true;
    } else {
        return false;
    }
} 