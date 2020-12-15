import React from "react";

import Item from "../Item/index";

import {format} from "date-fns";

const ItemsList = ({items}) => {
    return (
        <main className = "main">
            <ul className ="itemList">
                <li className = "item">
                    <div className = "date">Дата операции</div>
                    <div className = "operationType">Тип операции</div>
                    <div className = "showName">Объект операции</div>
                    <div className = "ticker">Тикер объекта</div>
                    <div className = "payment">Пэймент</div>
                    <div className = "currency">Валюта</div>
                    <div className = "status">Статус операции</div>
                </li>
                {items.map(item => {
                    return <Item 
                        type = {item.operationType}
                        date = {format(new Date(item.date), "PPp")}
                        key = {item.id}
                        ticker = {item.ticker}
                        status = {item.status}
                        payment = {item.payment}
                        currency = {item.currency}
                        showName = {item.showName}
                    />
                })}
            </ul>
        </main>
    )
}

export default ItemsList;