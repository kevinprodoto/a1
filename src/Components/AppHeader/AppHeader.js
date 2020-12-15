import React from "react";

const AppHeader = ({fail, count, changeBuy, changeSell, changeComission, changeAll, onLabelChange}) => {

    return (
        <header>
            <div>
                <p>{`Итого проёбано: ${fail}`}</p>
                <p>{`Количество операций: ${count}`}</p>
            </div>
            <div>
                <button type = "button" onClick = {changeAll}>Все</button>
                <button type = "button" onClick = {changeSell}>Продажи</button>
                <button type = "button" onClick = {changeBuy}>Покупки</button>
                <button type = "button" onClick = {changeComission}>Комиссии</button>
            </div>
            <div>
                <form>
                    <input placeholder = "Искать тут..." onChange = {onLabelChange}></input>
                </form>
            </div>
        </header>
    ) 
    
}

export default AppHeader;