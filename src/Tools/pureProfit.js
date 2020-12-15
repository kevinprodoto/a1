export const pureProfit = (items) => {
    let profits = 0;
    let comis = 0;
    let buies = 0;
    for (let item of items) {
        if (item.operationType === "BrokCom" && item.currency === "USD" && item.status === "done") {
            comis += item.payment;
        }
        if (item.operationType === "Sell" && item.currency === "USD" && item.status === "done") {
            profits += item.payment;
        }
        if (item.operationType === "Buy" && item.currency === "USD" && item.status === "done") {
            buies += item.payment;
        }
    }
    return (profits - comis + buies);
}