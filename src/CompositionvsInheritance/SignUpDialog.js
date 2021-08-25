import { Component } from "react";
import { Dialog } from "./Dialog";

export class SignUpDialog extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.state = { login: "" };
	}

	render() {
		return (
			<Dialog
				title="Sample Singup Dialog"
				message="How should we refer to you?"
			>
				<input
					value={this.state.login}
					type="text"
					onChange={this.handleChange}
				/>
				<button onClick={this.handleSignUp}>Sign Me Up!</button>
			</Dialog>
		);
	}

	handleChange(e) {
		this.setState({ login: e.target.value });
	}

	handleSignUp() {
		alert(`Welcome aboard, ${this.state.login}!`);
	}
}
