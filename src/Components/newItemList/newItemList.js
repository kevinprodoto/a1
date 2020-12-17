import React, {Component} from "react";

import NewItem from "../newItem";

import {format} from "date-fns";

import {checkDate} from "../../Tools/checkDate";

import {calcTick} from "../../Tools/calcTick";

export default class NewItemList extends Component {

    state = {
        itemsNames: new Set(),
        label: "",
    }

    onChange = (evv) => {
        this.setState(() => {
            return {
                label: evv.target.value.toUpperCase(),
            }
        })
    }

    check = (itemss, name) => {
        let result = false;
        for (let item of itemss) {
            if (item.ticker === name) {
                result = true;
            }
        }
        return result;
    }

    onFormSubmit = (evv) => {
        evv.preventDefault();
        if (this.state.label === "") {
            this.state.itemsNames.clear();
        } else {
            if (this.check(this.props.items, this.state.label)) {
                this.state.itemsNames.add(this.state.label);
            }
        }
        const {label} = this.state;
        const obj = {target: {value: label}};
        this.onChange(obj);
    }

    btnSubmit = (evv) => {
        this.state.itemsNames.delete(evv.target.previousElementSibling.innerText);
        const {label} = this.state;
        const obj = {target: {value: label}};
        this.onChange(obj);
    }

    render() {
        const {items, to, from} = this.props;
        const {itemsNames, label} = this.state;
        const names = Array.from(itemsNames);
        return (
            <fragment>
                <form className = "searchForm" onSubmit = {this.onFormSubmit}>
                    <input value = {label} onChange = {this.onChange} className = "search" placeholder = "Поиск по тикеру..."></input>
                </form>
                <div className = "tickerResults">
                    <p>{`Продажи: ${(calcTick(itemsNames, items, to, from, "Sell")).toFixed(2)}`}</p>
                    <p>{`Покупки: ${(calcTick(itemsNames, items, to, from, "Buy")).toFixed(2)}`}</p>
                    <p>{`Комиссии: ${(calcTick(itemsNames, items, to, from, "Commission")).toFixed(2)}`}</p>
                </div>
                <ul className = "stonks">
                    {names.map(itemName => {
                            return <li className = "forTicker">
                                <div>
                                    <p>{itemName}</p>
                                    <button className = "close" onClick = {this.btnSubmit}>X</button>
                                </div>
                                <ul>
                                    <li className = "item">
                                        <div className = "date">Дата</div>
                                        <div className = "quantity">Количество</div>
                                        <div className = "operationType">Тип операции</div>
                                        <div className = "price">Цена/шт</div>
                                        <div className = {"payment"}>Общая цена</div>
                                        <div className = "comiss">Комиссия</div>
                                        <div className = "description">Описание</div>
                                    </li>
                                    {items.filter(item => checkDate(item, to, from, itemName))
                                    .map(item => <NewItem 
                                                type = {item.operationType}
                                                date = {format(new Date(item.date), "PPp")}
                                                key = {item.id}
                                                status = {item.status}
                                                payment = {item.payment}
                                                currency = {item.currency}
                                                showName = {item.showName}
                                                description = {item.description}
                                                comiss = {item.commission}
                                                price = {item.price}
                                                quantity = {item.quantity}
                                            />)}
                                </ul>
                        </li>
                    })}
                </ul>
            </fragment>
    
        )
    }

}