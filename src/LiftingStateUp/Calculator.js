import { Component } from "react";
import { BoilingVerdict } from "./BoilingVerdict";

export class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = { temperature: "" };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			temperature: e.target.value,
		});
	}

	render() {
		const { temperature } = this.state;

		return (
			<fieldset>
				<legend>Enter temperature in Celsius:</legend>
				<input type="number" onChange={this.handleChange} value={temperature} />
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}
