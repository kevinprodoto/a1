import React from "react";

const NewItem = ({payment, date, type, comiss, description, price, quantity}) => {
    let clazs = "";
    if (type === "Sell") clazs = "textGreen";
    if (type === "Buy") clazs = "textRed";
    return <li className = "item">
        <div className = "date">{date}</div>
        <div className = "quantity">{quantity}</div>
        <div className = "operationType">{type}</div>
        <div className = "price">{price}</div>
        <div className = {"payment " + clazs}>{payment}</div>
        <div className = "comiss">{comiss}</div>
        <div className = "description">{description}</div>
    </li>
}

export default NewItem;