import React, {Component} from "react";
import { Api } from "./Api";
import { Form } from "./Form";
import { Table } from "./Table";

export class App extends Component {

    state = {
        characters: []
    };

    render() {
        const { characters } = this.state;
        return (
            <div className="app">
                <h1> Hello Raviteja, Welcome to React.</h1>
                <Table charactersData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
                <hr />
                <Api />
            </div>
        );
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    };

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters:  characters.filter((c, i)=>i!==index)
        })
    };
}