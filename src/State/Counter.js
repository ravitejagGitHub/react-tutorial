import React, { Component } from "react";

export class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {count: 0}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.increment(),
            1000
          );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    increment() {
        this.setState((state, props)=>({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div>
              <h2>Counter:  {this.state.count}.</h2>
            </div>
          );
    }
}