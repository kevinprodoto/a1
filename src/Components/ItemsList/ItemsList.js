import React from "react";

import NewItemList from "../newItemList/index";

const ItemsList = ({items, dateTo, dateFrom, onFormSubmit}) => {
    let keys = 1;
    return (
        <main className = "main">
            <NewItemList to = {dateTo} from = {dateFrom} onFormSubmit = {onFormSubmit} items = {items} key = {keys++}/>
        </main>
    )
}

export default ItemsList;