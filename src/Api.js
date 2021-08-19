import { Component } from "react";

export class Api extends Component {

    state = {
        data: [],
    };
    
    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';
        
        fetch(url).then(r => r.json()).then(
            (res) => {
                this.setState({
                    data: res
                });
            }
        );
    }

    render() {
        const {data} = this.state

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        });

        return <ul>{result}</ul>;
    }
}