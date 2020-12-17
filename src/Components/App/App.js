import React from "react";

import AppHeader from "../AppHeader/index";

import ItemsList from "../ItemsList/index";

const App = ({changeTo, changeFrom, all, onAll, itemsNamesAll, onDay, on3Day, onWeek, onMonth, onFormSubmit, dateFrom, dateTo, items, onLabelChange, day, days, week, month}) => {

    return (
        <section className = "a1app">
            <AppHeader 
                items = {items}
                from = {dateFrom}
                to = {dateTo}
                day = {day}
                days = {days}
                week = {week}
                month = {month}
                all = {all}
                itemsNamesAll = {itemsNamesAll}
                onDay = {onDay}
                on3Day = {on3Day}
                onWeek = {onWeek}
                onMonth = {onMonth}
                onAll = {onAll}
                onLabelChange = {onLabelChange}
                changeTo= {changeTo}
                changeFrom = {changeFrom}/>
            <ItemsList onFormSubmit = {onFormSubmit} items = {items} dateFrom = {dateFrom} dateTo = {dateTo}/>
        </section>
    )
}

export default App;