import React, {Component} from "react";
import { Table } from "./Table";

export class App extends Component {

    state = {
        characters: [
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
    };

    render() {
        const { characters } = this.state;
        return (
            <div className="app">
                <h1> Hello Raviteja, Welcome to React.</h1>
                <Table charactersData={characters} removeCharacter={ this.removeCharacter }/>
            </div>
        );
    }

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters:  characters.filter((c, i)=>i!==index)
        })
    };
}