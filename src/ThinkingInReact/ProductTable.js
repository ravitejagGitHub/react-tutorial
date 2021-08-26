import { Component } from "react";
import { ProductHeader } from "./ProductHeader";
import { ProductRow } from "./ProductRow";

export class ProductTable extends Component {
	render() {
		const { products, filterText, inStockOnly } = this.props;
		const filteredProducts = products.filter(
			(p) =>
				p.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) >=
					0 && (inStockOnly ? p.stocked === inStockOnly : true)
		);

		return filteredProducts.length > 0 ? (
			<table className="products">
				<ProductHeader headers={["Name", "Price"]} />
				<tbody>
					{filteredProducts.map((p) => (
						<ProductRow key={p.name} product={p} />
					))}
				</tbody>
			</table>
		) : (
			<p>No Products found!</p>
		);
	}
}
