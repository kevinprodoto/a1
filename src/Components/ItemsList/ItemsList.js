import React from "react";

import Item from "../Item/index"

import {obj} from "../../1";

const ItemsList = () => {
    const items = obj.payload.items;
    return <ul className ="itemList">
        {items.map(item => {
            return <Item 
                key = {item.id}
                ticker = {item.ticker}
                status = {item.status}
                payment = {item.payment}
                currency = {item.currency}
                showName = {item.showName}
            />
        })}
    </ul>

}

export default ItemsList;