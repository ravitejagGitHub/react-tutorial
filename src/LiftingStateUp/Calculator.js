import { Component } from "react";
import { BoilingVerdict } from "./BoilingVerdict";
import { TemperatureScale, tryConvert } from "./lib";
import { TemperatureInput } from "./TemperatureInput";

export class Calculator extends Component {
	constructor(props) {
		super(props);
		this.state = { temperature: "", scale: TemperatureScale.C };

		this.handleCelsiusChange = this.handleTemperatureChange.bind(
			this,
			TemperatureScale.C
		);
		this.handleFahrenheitChange = this.handleTemperatureChange.bind(
			this,
			TemperatureScale.F
		);
	}

	handleTemperatureChange(scale, temperature) {
		this.setState({
			temperature,
			scale,
		});
	}

	render() {
		const { temperature, scale } = this.state;
		const celsius =
			scale === TemperatureScale.F
				? tryConvert(temperature, TemperatureScale.C)
				: temperature;
		const fahrenheit =
			scale === TemperatureScale.C
				? tryConvert(temperature, TemperatureScale.F)
				: temperature;

		return (
			<fieldset>
				<legend>Temperature Caliculator :</legend>
				<TemperatureInput
					scale={TemperatureScale.C}
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale={TemperatureScale.F}
					temperature={fahrenheit}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(temperature)} />
			</fieldset>
		);
	}
}
