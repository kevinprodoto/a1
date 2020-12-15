import React, {Component} from "react";

class TaskForm extends Component{

    onSubmit = (evv) => {
        localStorage.setItem("req", evv.target.value);
        console.log(localStorage.getItem("req"));
    }

    render() {
        return <form onSubmit = {this.onSubmit} className = "FORM">
        <p>
            Введите данные:
        </p>
        <input placeholder = "example: https://URL?api_key=<YOURKEY>"></input>
    </form>
    }

}

export default TaskForm;