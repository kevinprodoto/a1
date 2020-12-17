import React from "react";

import {calc} from "../../Tools/calc"

const ResultItem = ({name, items, to, from}) => {
    return(
        <li className = "results__item">
            <div className = "StonkName">{name}</div>
            <div className = "StonkProfit">{(calc(name, items, to, from, "Sell") - calc(name, items, to, from, "Buy")).toFixed(2)}</div>
            <div className = "StonkComm">{(calc(name, items, to, from, "Commission")).toFixed(2)}</div>
            <div className = "StonkTax">{((calc(name, items, to, from, "Sell") - calc(name, items, to, from, "Buy")) * 0.13).toFixed(2)}</div>
            <div className = "StonkPure">{((calc(name, items, to, from, "Sell") - calc(name, items, to, from, "Buy") - calc(name, items, to, from, "Commission")) * 0.87).toFixed(2)}</div>
        </li>
    )
}
export default ResultItem;