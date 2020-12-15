import React, {Component} from "react";

class TaskForm extends Component{

    onSubmit = (evv) => {
        localStorage.setItem("tyu", evv.target.value);
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