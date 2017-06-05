import React from "react";
import ReactDOM from "react-dom";
import {variableToExport} from "./module_1";
import axios from "axios";

class Hello extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello world</h1>
                <h2>Time: {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

console.log(variableToExport.a);
let funTick= function () {
    ReactDOM.render(<Hello/>, document.getElementById("root"));
};


var promiseGet_1= axios({
    method: 'get',
    url: "/index.html"
});

var asyncFunc1= async function () {
    var response= await promiseGet_1;
    console.log(response.data)
};

setInterval(funTick, 1000);
asyncFunc1();
