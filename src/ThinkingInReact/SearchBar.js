import { Component } from "react";

export class SearchBar extends Component {
	render() {
		const { placeholder, children } = this.props;
		return (
			<form>
				<input type="text" placeholder={placeholder} />
				<p>
					<input type="checkbox" /> {children}
				</p>
			</form>
		);
	}
}
