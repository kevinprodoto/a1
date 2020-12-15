import React from 'react';
import ReactDOM from 'react-dom';
//import TaskForm from "../src/Components/TaskForm/index";
import AppContainer from "./Containers/AppContainer/index";

//if (!localStorage.getItem("tyu")) {
//    ReactDOM.render(<TaskForm />, document.getElementById('root'))
//}  else {
    ReactDOM.render(<AppContainer />, document.getElementById('root'));
//}



