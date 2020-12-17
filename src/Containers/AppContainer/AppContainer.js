import React, {Component} from "react"

import App from "../../Components/App";

// import TaskForm from "../../Components/TaskForm/index";

import {changeDate} from "../../Tools/changeDate";

import {obj} from "../../132";

import {changeDone} from "../../Tools/changeDone";

//import {changeName} from "../../Tools/changeName";

// import Request from "../../Services/Request";

export default class AppContainer extends Component {

    state = {
        label: "",
        items: obj.payload.items.filter(item => changeDone(item)),//new Request(localStorage.getItem("tyu")).getAllTrades(),
        updetedItems: obj.payload.items.map(item => item).filter(item => changeDone(item)),//new Request(localStorage.getItem("tyu")).getAllTrades(),
        itemsNamesAll: new Set(obj.payload.items.map(item => item.ticker)),//changeName(obj.payload.items),
        day: true,
        days: false,
        week: false,
        month: false,
        all: false,
        dateFrom: new Date(new Date() - (24*3600*1000)),//firstDay(new Request(localStorage.getItem("tyu")).getAllTrades()),
        dateTo: new Date(),//lastDay(new Request(localStorage.getItem("tyu")).getAllTrades()),
    }
    onLabelChange = (evv) => {
        if (evv.target.value === "") {
            this.setState(() => {
                return {
                    updetedItems: this.state.items.filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date))),
                    label: "",
                }
            })
        } else if (this.state.all) {
            this.setState(() => {
                return {
                    label: evv.target.value,
                    updetedItems: this.state.items.filter(item => this.changeLabel(item, evv.target.value)).filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        } else if (this.state.sell) {
            this.setState(() => {
                return {
                    label: evv.target.value,
                    updetedItems: this.state.items.filter(item => this.changeLabel(item, evv.target.value)).filter(item => item.operationType === "Sell").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        } else if (this.state.buy) {
            this.setState(() => {
                return {
                    label: evv.target.value,
                    updetedItems: this.state.items.filter(item => this.changeLabel(item, evv.target.value)).filter(item => item.operationType === "Buy").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        } else if (this.state.brokCom) {
            this.setState(() => {
                return {
                    label: evv.target.value,
                    updetedItems: this.state.items.filter(item => this.changeLabel(item, evv.target.value)).filter(item => item.operationType === "BrokCom").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        }
    }

    changeLabel = (item, label) => {
        if (item.ticker) {
            return item.ticker.includes(label)
        }
    }

    onDay = () => {
        this.setState(() => {
            return {
                dateFrom: new Date(new Date() - (24*3600*1000)),
                day: true,
                days: false,
                week: false,
                month: false,
                all: false,
            }
        })
    }

    on3Day = () => {
        this.setState(() => {
            return {
                dateFrom: new Date(new Date() - (24*3600*1000*3)),
                day: false,
                days: true,
                week: false,
                month: false,
                all: false,
            }
        })
    }

    onWeek = () => {
        this.setState(() => {
            return {
                dateFrom: new Date(new Date() - (24*3600*1000*7)),
                day: false,
                days: false,
                week: true,
                month: false,
                all: false,
            }
        })
    }

    onMonth = () => {
        this.setState(() => {
            return {
                dateFrom: new Date(new Date() - (24*3600*1000*30)),
                day: false,
                days: false,
                week: false,
                month: true,
                all: false,
            }
        })
    }

    onAll = () => {
        this.setState(() => {
            return {
                dateFrom: new Date(new Date() - (24*3600*1000*365)),
                day: false,
                days: false,
                week: false,
                month: false,
                all: true,
            }
        })
    }

    render() {
        const {updetedItems, day, days, week, month, all, dateTo, dateFrom, itemsNamesAll} = this.state;
 //       if (!localStorage.getItem("req")) {
 //           return <TaskForm />
//        } else {
            return <App 
            onDay = {this.onDay}
            on3Day = {this.on3Day}
            onWeek = {this.onWeek}
            onMonth = {this.onMonth}
            onAll = {this.onAll}
            itemsNamesAll = {itemsNamesAll}
            onLabelChange = {this.onLabelChange}
            items = {updetedItems}
            day = {day}
            days = {days}
            week = {week}
            month = {month}
            all = {all}
            dateFrom = {dateFrom}
            dateTo = {dateTo}/>
 //       }

    }
}