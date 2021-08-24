import { Component } from "react";

export class WarningBanner extends Component {
	componentDidUpdate() {
		console.log("---componentDidUpdate---");
	}

	componentDidMount() {
		console.log("---componentDidMount---");
	}
	render() {
		if (!this.props.warn) {
			return null;
		}

		return <div className="warning">Warning!</div>;
	}
}
