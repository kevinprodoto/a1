import React from "react";

import AppHeader from "../AppHeader/index";

import ItemsList from "../ItemsList/index";

const App = ({fail, items, changeBuy, changeSell, changeComission, changeAll}) => {

    return (
        <section className = "a1app">
            <AppHeader 
                count = {items.length}
                fail = {fail}
                changeComission = {changeComission}
                changeBuy = {changeBuy}
                changeSell = {changeSell}
                changeAll = {changeAll}/>
            <ItemsList items = {items}/>
        </section>
    )
}

export default App;