import {obj} from "../1";

export const failed = () => {
    let fail = 0;

    for (let item of obj.payload.items) {
        if (item.operationType === "BrokCom") {
            fail += Math.round(Math.abs(item.payment));
        }
    }
    return fail;
}