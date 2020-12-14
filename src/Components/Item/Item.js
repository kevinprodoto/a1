import React from "react";

const Item = ({ticker, status, payment, currency, showName}) => {
    return <li className = "item">
        <div className = "showName">{showName}</div>
        <div className = "ticker">{ticker}</div>
        <div className = "payment">{payment}</div>
        <div className = "currency">{currency}</div>
        <div className = "status">{status}</div>
    </li>
}

export default Item;