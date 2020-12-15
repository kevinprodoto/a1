import React from "react";

const AppHeader = ({changeBuy, changeSell, changeComission, changeAll, onLabelChange, all, sell, buy, brokCom, changeTo, changeFrom}) => {

    let classAll = "active";
    let classSell = "";
    let classBuy = "";
    let classBrokCom = "";

    if (all) {
        classAll = "active";
        classSell = "";
        classBuy = "";
        classBrokCom = "";
    }
    if (sell) {
        classAll = "";
        classSell = "active";
        classBuy = "";
        classBrokCom = "";
    }
    if (buy) {
        classAll = "";
        classSell = "";
        classBuy = "active";
        classBrokCom = "";
    }
    if (brokCom) {
        classAll = "";
        classSell = "";
        classBuy = "";
        classBrokCom = "active";
    }

    return (
        <header className = "appHeader">
            <div className = "filters">
                <button className = {classAll} type = "button" onClick = {changeAll}>Все</button>
                <button className = {classSell} type = "button" onClick = {changeSell}>Продажи</button>
                <button className = {classBuy} type = "button" onClick = {changeBuy}>Покупки</button>
                <button className = {classBrokCom} type = "button" onClick = {changeComission}>Комиссии</button>
            </div>
            <div className = "inputs">
                <form>
                    <input className = "search" placeholder = "Поиск по тикеру..." onChange = {onLabelChange}></input>
                </form>
                <p className = "text">От</p>
                <form>
                    <input onChange = {changeFrom} type = "date"></input>
                </form>
                <p className = "text">До</p>
                <form>
                    <input onChange = {changeTo} type = "date"></input>
                </form>
            </div>
        </header>
    ) 
    
}

export default AppHeader;