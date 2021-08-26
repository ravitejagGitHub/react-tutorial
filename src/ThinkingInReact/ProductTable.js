import { Component } from "react";
import { ProductHeader } from "./ProductHeader";
import { ProductRow } from "./ProductRow";

export class ProductTable extends Component {
	render() {
		const { products } = this.props;
		return (
			<table class="products">
				<ProductHeader headers={["Name", "Price"]} />
				<tbody>
					{products.map((p) => (
						<ProductRow product={p} />
					))}
				</tbody>
			</table>
		);
	}
}
