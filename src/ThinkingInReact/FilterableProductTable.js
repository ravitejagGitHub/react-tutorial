import { Component } from "react";

import { products } from "./products";
import { ProductTable } from "./ProductTable";
import { SearchBar } from "./SearchBar";

export class FilterableProductTable extends Component {
	render() {
		return (
			<fieldset>
				<legend>Filterable Product Table</legend>

				<SearchBar placeholder="Search...">
					Only show products in stock
				</SearchBar>

				<ProductTable products={products}></ProductTable>
			</fieldset>
		);
	}
}
