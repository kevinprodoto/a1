import React, {Component} from "react";

import ResultItem from "../resultItem/index";

import {headerDate} from "../../Tools/headerDate";

import {calcAll} from "../../Tools/calcAll";

export default class AppHeader extends Component {

    

    render() {
        const {changeFrom, changeTo, all, onAll, items, to, from, itemsNamesAll, onDay, on3Day, onWeek, onMonth, day, days, week, month} = this.props;
        let classDay = "";
        let classDays = "";
        let classWeek = "";
        let classMonth = "";
        let classAll = "";
        if (day) {
            classDay = "active";
            classDays = "";
            classWeek = "";
            classMonth = "";
            classAll = "";
        }
        if (days) {
            classDay = "";
            classDays = "active";
            classWeek = "";
            classMonth = "";
            classAll = "";
        }
        if (week) {
            classDay = "";
            classDays = "";
            classWeek = "active";
            classMonth = "";
            classAll = "";
        }
        if (month) {
            classDay = "";
            classDays = "";
            classWeek = "";
            classMonth = "active";
            classAll = "";
        }
        if (all) {
            classDay = "";
            classDays = "";
            classWeek = "";
            classMonth = "";
            classAll = "active";
        }
        return (
            <header className = "appHeader">
                <div className = "buttons">
                    <button className = {classDay} type = "button" onClick = {onDay}>День</button>
                    <button className = {classDays} type = "button" onClick = {on3Day}>3 дня</button>
                    <button className = {classWeek} type = "button" onClick = {onWeek}>Неделя</button>
                    <button className = {classMonth} type = "button" onClick = {onMonth}>Месяц</button>
                    <button className = {classAll} type = "button" onClick = {onAll}>Год</button>
                </div>
                <div>
                    <p className = "text">От</p>
                    <form>
                        <input onChange = {changeFrom} type = "date"></input>
                    </form>
                    <p className = "text">До</p>
                    <form>
                        <input onChange = {changeTo} type = "date"></input>
                    </form>
                </div>
                <ul className = "results">
                    <li className = "results__item">
                        <div className = "StonkName">Акция</div>
                        <div className = "StonkProfit">Прибыль</div>
                        <div className = "StonkComm">Комиссия</div>
                    </li>
                    {Array.from(itemsNamesAll).filter(name => headerDate(name, items, to, from)).map(name => <ResultItem to = {to} from = {from} items = {items} name = {name}/>)}
                    <div>
                        <p>{`Продажи: ${calcAll(items, to, from, "Sell").toFixed(2)}`}</p>
                        <p>{`Покупки: ${calcAll(items, to, from, "Buy").toFixed(2)}`}</p>
                        <p>{`Комиссии: ${calcAll(items, to, from, "Commission").toFixed(2)}`}</p>
                    </div>
                </ul>
            </header>
        ) 
    }
   
    
}