import React, {Component} from "react";
import { Table } from "./Table";

export class App extends Component {
    render() {
        const characters = [
            {
              name: 'Raviteja',
              job: 'Software',
            },
            {
              name: 'Chakri',
              job: 'Loco pilot',
            },
            {
              name: 'Sravani',
              job: 'House wife',
            }
          ]
        return (
            <div className="app">
                <h1> Hello Raviteja, Welcome to React.</h1>
                <Table charactersData={ characters }/>
            </div>
        );
    }
}