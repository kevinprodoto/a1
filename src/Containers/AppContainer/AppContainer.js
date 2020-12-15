import React, {Component} from "react"

import App from "../../Components/App";

// import TaskForm from "../../Components/TaskForm/index";

import {changeDate} from "../../Tools/changeDate";

import {firstDay} from "../../Tools/firstDay";

import {lastDay} from "../../Tools/lastDay";

import {obj} from "../../1";

// import Request from "../../Services/Request";

export default class AppContainer extends Component {

    state = {
        label: "",
        items: obj.payload.items,//new Request(localStorage.getItem("tyu")).getAllTrades(),
        updetedItems: obj.payload.items.map(item => item),//new Request(localStorage.getItem("tyu")).getAllTrades(),
        all: true,
        sell: false,
        buy: false,
        brokCom: false,
        dateFrom: firstDay(obj.payload.items),//firstDay(new Request(localStorage.getItem("tyu")).getAllTrades()),
        dateTo: lastDay(obj.payload.items),//lastDay(new Request(localStorage.getItem("tyu")).getAllTrades()),
    }

    changeAll = () => {
        if (this.state.label !== "") {
            this.setState(() => {
                return {                    
                    all: true,
                    sell: false,
                    buy: false,
                    brokCom: false,
                    updetedItems: this.state.items.filter(item => {return () => {
                        if (item.ticker) {
                            return item.ticker.includes(this.state.label)
                        }
                    }}).filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        } else {
            this.setState(() => {
                return {
                    updetedItems: this.state.items.map(item => item).filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date))),
                    all: true,
                    sell: false,
                    buy: false,
                    brokCom: false,
                }
            })
        }
    }

    changeSell = () => {
        if (this.state.label !== "") {
            this.setState(() => {
                return {
                    all: false,
                    sell: true,
                    buy: false,
                    brokCom: false,
                    updetedItems: this.state.items.filter(item => {return item.operationType === "Sell"}).filter(item => {return () => {
                        if (item.ticker) {
                            return item.ticker.includes(this.state.label)
                        }
                    }}).filter(item => {return changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date))})
                }
                })
        } else {
            this.setState(() => {
                return {
                    updetedItems: this.state.items.filter((item) => item.operationType === "Sell").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date))),
                    all: false,
                    sell: true,
                    buy: false,
                    brokCom: false,
                }
            })
        }

    }

    changeBuy = () => { 
        if (this.state.label !== "") {
            this.setState(() => {
                return {
                    all: false,
                    sell: false,
                    buy: true,
                    brokCom: false,
                    updetedItems: this.state.items.filter(item => item.operationType === "Buy").filter(item => {return () => {
                        if (item.ticker) {
                            return item.ticker.includes(this.state.label)
                        }
                    }}).filter(item => {return changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date))})
                }
                })
        } else {
            this.setState(() => {
                return {
                    updetedItems: this.state.items.filter((item) => item.operationType === "Buy").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date))),
                    all: false,
                    sell: false,
                    buy: true,
                    brokCom: false,
                }
            })
        }

    }

    changeComission = () => {
        if (this.state.label !== "") {
            this.setState(() => {
                return {
                    all: false,
                    sell: false,
                    buy: false,
                    brokCom: true,
                    updetedItems: this.state.items.filter(item => item.operationType === "BrokCom").filter(item => { return () => {
                        if (item.ticker) {
                            return item.ticker.includes(this.state.label)
                        }
                    }}).filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
                })
        } else {
            this.setState(() => {
                return {
                    updetedItems: this.state.items.filter((item) => item.operationType === "BrokCom").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date))),
                    all: false,
                    sell: false,
                    buy: false,
                    brokCom: true,
                }
            })
        }
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
                    updetedItems: this.state.items.filter(item => { return () => {
                        if (item.ticker) {
                            return item.ticker.includes(evv.target.value)
                        }
                    }}).filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        } else if (this.state.sell) {
            this.setState(() => {
                return {
                    label: evv.target.value,
                    updetedItems: this.state.items.filter(item => { return () => {
                        if (item.ticker) {
                            return item.ticker.includes(evv.target.value)
                        }
                    }}).filter(item => item.operationType === "Sell").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        } else if (this.state.buy) {
            this.setState(() => {
                return {
                    label: evv.target.value,
                    updetedItems: this.state.items.filter(item => { return () => {
                        if (item.ticker) {
                            return item.ticker.includes(evv.target.value)
                        }
                    }}).filter(item => item.operationType === "Buy").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        } else if (this.state.brokCom) {
            this.setState(() => {
                return {
                    label: evv.target.value,
                    updetedItems: this.state.items.filter(item => { return () => {
                        if (item.ticker) {
                            return item.ticker.includes(evv.target.value)
                        }
                    }}).filter(item => item.operationType === "BrokCom").filter(item => changeDate(this.state.dateFrom, this.state.dateTo, new Date(item.date)))
                }
            })
        }
    }

    changeFrom = (evv) => {
        this.setState(() => {
            return {
                dateFrom: new Date(evv.target.value)
            }
        })
        this.changeAll()
    }

    changeTo = (evv) => {
        this.setState(() => {
            return {
                dateTo: new Date(evv.target.value)
            }
        })
        this.changeAll()
    }

    render() {
        const {updetedItems, all, sell, buy, brokCom, dateTo, dateFrom} = this.state;
 //       if (!localStorage.getItem("req")) {
 //           return <TaskForm />
//        } else {
            return <App 
            onLabelChange = {this.onLabelChange}
            items = {updetedItems}
            changeComission = {this.changeComission}
            changeBuy = {this.changeBuy}
            changeSell = {this.changeSell}
            changeAll = {this.changeAll}
            all = {all}
            sell = {sell}
            buy = {buy}
            brokCom = {brokCom}
            changeFrom = {this.changeFrom}
            changeTo = {this.changeTo}
            dateFrom = {dateFrom}
            dateTo = {dateTo}/>
 //       }

    }
}