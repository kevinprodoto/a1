import React, {Component} from "react"

import App from "../../Components/App";

import {failed} from "../../Services/fail";

import {obj} from "../../1";

export default class AppContainer extends Component {

    state = {
        fla: failed(),
        items: obj.payload.items,
        updetedItems: obj.payload.items.map(item => item),
    }

    changeAll = () => {
        this.setState(() => {
            return {
                updetedItems: this.state.items.map(item => item)
            }
        })
    }

    changeSell = () => {
        this.setState(() => {
            return {
                updetedItems: this.state.items.filter((item) => item.operationType === "Sell")
            }
        })
    }

    changeBuy = () => { 
        this.setState(() => {
            return {
                updetedItems: this.state.items.filter(item => item.operationType === "Buy")
            }
        })
    }

    changeComission = () => {
        this.setState(() => {
            return {
                updetedItems: this.state.items.filter(item => item.operationType === "BrokCom")
            }
        })
    }

    onLabelChange = (evv) => {
        if (evv.target.value === "") {
            this.setState(() => {
                return {
                    updetedItems: this.state.items,
                }
            })
        } else {
            console.log(evv.target.value);
            this.setState(() => {
                return {
                    updetedItems: this.state.items.filter(item => {
                        if (item.ticker) {
                            return item.ticker.includes(evv.target.value)
                        }
                    })
                }
            })
        }
    }

    render() {
        const {fla, updetedItems} = this.state;
        return <App 
                    onLabelChange = {this.onLabelChange}
                    fail = {fla}
                    items = {updetedItems}
                    changeComission = {this.changeComission}
                    changeBuy = {this.changeBuy}
                    changeSell = {this.changeSell}
                    changeAll = {this.changeAll}/>
    }
}