import { Component } from "react";

export class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleFilterTextChange(event) {
		this.props.onFilterTextChange(event.target.value);
	}
	handleInStockChange(event) {
		this.props.onInStockChange(event.target.checked);
	}

	render() {
		const { placeholder, children, inStockOnly, filterText } = this.props;
		return (
			<form>
				<input
					type="text"
					placeholder={placeholder}
					value={filterText}
					onChange={this.handleFilterTextChange}
				/>
				<p style={{ display: "flex", alignItems: "center" }}>
					<input
						id="isStockOnly"
						type="checkbox"
						value={inStockOnly}
						onChange={this.handleInStockChange}
						style={{ margin: "7px 10px 0 0" }}
					/>{" "}
					<label htmlFor="isStockOnly">{children}</label>
				</p>
			</form>
		);
	}
}
