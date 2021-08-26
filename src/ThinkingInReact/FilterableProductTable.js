import { Component } from "react";

import { products } from "./products";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export class FilterableProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: "",
			inStockOnly: false,
		};
		this.onFilterTextChange = this.onFilterTextChange.bind(this);
		this.onInStockChange = this.onInStockChange.bind(this);
	}

	onFilterTextChange(filterText) {
		this.setState({
			filterText,
		});
	}

	onInStockChange(inStockOnly) {
		this.setState({
			inStockOnly,
		});
	}

	render() {
		const { filterText, inStockOnly } = this.state;

		return (
			<fieldset>
				<legend>Filterable Product Table</legend>

				<SearchBar
					placeholder="Search..."
					filterText={filterText}
					inStockOnly={inStockOnly}
					onInStockChange={this.onInStockChange}
					onFilterTextChange={this.onFilterTextChange}
				>
					Only show products in stock
				</SearchBar>

				<ProductTable
					products={products}
					filterText={filterText}
					inStockOnly={inStockOnly}
				></ProductTable>
			</fieldset>
		);
	}
}
