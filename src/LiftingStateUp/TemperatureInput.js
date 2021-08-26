import { Component } from "react";
import { scaleNames } from "./lib";

export class TemperatureInput extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const { scale, temperature } = this.props;
		return (
			<div className={`temparature__${scale}`}>
				<legend>Enter temperature in {scaleNames[scale]}:</legend>
				<input type="number" onChange={this.handleChange} value={temperature} />
			</div>
		);
	}
}
