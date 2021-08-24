import { Component } from "react";

export class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        // this.togglesState = this.togglesState.bind(this);
    }

    togglesState() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={()=>this.togglesState()}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}