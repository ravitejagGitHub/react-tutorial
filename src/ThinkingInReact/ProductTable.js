import { Component } from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductHeader } from "./ProductHeader";
import { ProductRow } from "./ProductRow";

export class ProductTable extends Component {
	render() {
		const { products, filterText, inStockOnly } = this.props;
		const filteredProducts = this._filterProducts(
			products,
			filterText,
			inStockOnly
		);

		if (filteredProducts.length === 0) {
			return <p>No Products found!</p>;
		}

		const productRows = [];
		let lastCategory = null;

		filteredProducts.forEach((product) => {
			if (product.category !== lastCategory) {
				productRows.push(
					<ProductCategoryRow
						category={product.category}
						bgColor="cadetblue"
						key={product.category}
					/>
				);
			}
			productRows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});

		return (
			<table className="products">
				<ProductHeader headers={["Name", "Price"]} />
				<tbody>{productRows}</tbody>
			</table>
		);
	}

	_filterProducts(products, filterText, inStockOnly) {
		return products.filter(
			(p) =>
				p.name.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) >=
					0 && (inStockOnly ? p.stocked === inStockOnly : true)
		);
	}
}
