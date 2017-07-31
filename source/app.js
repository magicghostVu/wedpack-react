import React from "react";
import ReactDOM from "react-dom";
import {variableToExport} from "./module_1";
import axios from "axios";
import Button from 'react-bootstrap/lib/Button';

class Hello extends React.Component {

    constructor(props){
        super(props);

        this.state= {
          text: "this is text"
        };
        this.clickTest= this.clickTest.bind(this);
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <input id="inputText" type="text"/>
                <h2>Time: {new Date().toLocaleTimeString()}</h2>
                <button className="btn btn-success"  onClick={this.clickTest}>This is native btn from html</button>
            </div>
        );
    }


    clickTest(){
        console.log(this.props.g);
        this.state.text= "jfhdfjgh";
        this.setState(this.state);

    }
}




//console.log(variableToExport.a);
let funTick = function () {
    ReactDOM.render(
        <Hello g="okok" ></Hello>,
        document.getElementById("root"));
};


funTick();

var promiseGet_1 = axios({
    method: 'get',
    url: "/index.html"
});

var asyncFunc1 = async function () {
    var response = await promiseGet_1;
    console.log(response.data)
};



//var