export const comission = (items) => {
    let result = 0;
    for ( let item of items) {
        if (item.operationType === "BrokCom" && item.currency === "USD") {
            result += item.payment;
        }
    }
    return Math.floor(Math.abs(result));
}