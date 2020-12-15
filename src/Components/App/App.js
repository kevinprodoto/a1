import React from "react";

import AppHeader from "../AppHeader/index";

import ItemsList from "../ItemsList/index";

const App = ({dateFrom, dateTo, fail, items, changeBuy, changeSell, changeComission, changeAll, onLabelChange, all, sell, buy, brokCom, changeFrom, changeTo}) => {

    return (
        <section className = "a1app">
            <AppHeader 
                all = {all}
                sell = {sell}
                buy = {buy}
                brokCom = {brokCom}
                count = {items.length}
                fail = {fail}
                changeComission = {changeComission}
                changeBuy = {changeBuy}
                changeSell = {changeSell}
                changeAll = {changeAll}
                onLabelChange = {onLabelChange}
                changeTo = {changeTo}
                changeFrom = {changeFrom}/>
            <ItemsList items = {items} dateFrom = {dateFrom} dateTo = {dateTo}/>
        </section>
    )
}

export default App;