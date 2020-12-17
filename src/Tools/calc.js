export const calc = (name, items, to, from, param) => {
    let result = 0;
    for (let item of items) {
        if (item.ticker === name && new Date(item.date) >= from && new Date(item.date) <= to && param === "Commission" && (item.operationType === "Sell" || item.operationType === "Buy")) {
            result += item.commission;
        }
        if (item.ticker === name && new Date(item.date) >= from && new Date(item.date) <= to && param === "Sell" && item.operationType === "Sell") {
            result += item.payment;
        }
        if (item.ticker === name && new Date(item.date) >= from && new Date(item.date) <= to && param === "Buy" && item.operationType === "Buy") {
            result += item.payment;
        }
    }
    return Math.abs(result);
}