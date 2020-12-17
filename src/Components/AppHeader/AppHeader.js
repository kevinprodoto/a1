import React, {Component} from "react";

import ResultItem from "../resultItem/index";

import {headerDate} from "../../Tools/headerDate"

export default class AppHeader extends Component {

    

    render() {
        const {all, onAll, items, to, from, itemsNamesAll, onDay, on3Day, onWeek, onMonth, day, days, week, month} = this.props;
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
                <ul className = "results">
                    <li className = "results__item">
                        <div className = "StonkName">Акция</div>
                        <div className = "StonkProfit">Прибыль</div>
                        <div className = "StonkComm">Комиссия</div>
                        <div className = "StonkTax">Налог</div>
                        <div className = "StonkPure">Чистая прибыль</div>
                    </li>
                    {Array.from(itemsNamesAll).filter(name => headerDate(name, items, to, from)).map(name => <ResultItem to = {to} from = {from} items = {items} name = {name}/>)}
                </ul>
            </header>
        ) 
    }
   
    
}