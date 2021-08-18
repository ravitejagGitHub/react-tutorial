import React, {Component} from "react";
import { Table } from "./Table";

export class App extends Component {
    render() {
        return (
            <div className="app">
                <h1> Hello Raviteja, Welcome to React.</h1>
                <Table/>
            </div>
        );
    }
}