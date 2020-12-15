import React from "react";

import Item from "../Item/index";

import {format} from "date-fns";

import {comission} from "../../Tools/comission";

import {profit} from "../../Tools/profit";

import {pureProfit} from "../../Tools/pureProfit";

import {howMuchDays} from "../../Tools/howMuchDays";

import {profitByDay} from "../../Tools/profitByDay";

const ItemsList = ({items, dateTo, dateFrom}) => {
    return (
        <main className = "main">
            <div className = "resultsTable">
                <div className = "resultsTable__block">
                    <p>{`Чистая Прибыль: ${profit(items)}`}</p>
                    <p>{`Всего сделок: ${items.length}`}</p>
                </div>
                <div className = "resultsTable__block">
                    <p>{`Прибыль в день: ${profitByDay(profit(items), howMuchDays(dateFrom, dateTo))}`}</p>
                    <p>{`Торговых дней: ${howMuchDays(dateFrom, dateTo)}`}</p>
                </div>
                <div className = "resultsTable__block">
                    <p>{`Прибыль со сделок: ${pureProfit(items)}`}</p>
                    <p>{`Комиссия за сделки: ${comission(items)}`}</p>
                </div>
                <div className = "resultsTable__block">
                    <p>{`Прогнозируемый доход в год: ${profit(items) * 259}`}</p>
                    <p>{`Доходность / риск: Lorem ipsum`}</p>
                </div>
            </div>
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