import React, {Component} from "react";

import NewItem from "../newItem";

import {format} from "date-fns";

import {checkDate} from "../../Tools/checkDate"

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

    onFormSubmit = (evv) => {
        evv.preventDefault();
        if (this.state.label === "") {
            this.state.itemsNames.clear();
        } else {
            this.state.itemsNames.add(this.state.label);
        }
        const {label} = this.state;
        const obj = {target: {value: label}};
        this.onChange(obj);
        console.log(this.state.itemsNames);
    }

    btnSubmit = (evv) => {
        this.state.itemsNames.delete(evv.target.previousElementSibling.innerText);
        const {label} = this.state;
        const obj = {target: {value: label}};
        this.onChange(obj);
    }

    render() {
        const {items, to, from} = this.props;
        const {itemsNames} = this.state;
        const names = Array.from(itemsNames);
        return (
            <fragment>
                <form className = "searchForm" onSubmit = {this.onFormSubmit}>
                    <input onChange = {this.onChange} className = "search" placeholder = "Поиск по тикеру..."></input>
                </form>
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