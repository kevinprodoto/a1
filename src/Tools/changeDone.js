export const changeDone = (item) => {
    if (item.status === "done" && item.currency === "USD" && item.payment !== "0" && item.operationType !== "BrokCom") {
        return true;
    } else {
        return false;
    }
}