import { Component } from "react";
import { WarningBanner } from "./WarningBanner";

export class Page extends Component {
	constructor(props) {
		super(props);
		this.state = { showWarning: false };
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState((state) => ({
			showWarning: !state.showWarning,
		}));
	}

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? "Hide" : "Show"}
				</button>
			</div>
		);
	}
}
