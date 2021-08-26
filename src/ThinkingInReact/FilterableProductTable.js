import { Component } from "react";
import { products } from "./products";

export class FilterableProductTable extends Component {
	render() {
		return (
			<>
				<form>
					<input type="text" placeholder="Search..." />
					<p>
						<input type="checkbox" /> Only show products in stock
					</p>
				</form>

				<table class="products">
					<thead class="header">
						<th class="header__column">Name</th>
						<th class="header__column">Price</th>
					</thead>
					<tbody>
						{products.map((p) => (
							<tr>
								<td>{p.name}</td>
								<td>{p.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</>
		);
	}
}
