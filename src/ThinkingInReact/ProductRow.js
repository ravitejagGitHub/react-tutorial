import { Component } from "react";

export class ProductRow extends Component {
	render() {
		const { product } = this.props;
		const name = product.stocked ? (
			product.name
		) : (
			<span style={{ color: "red" }}>{product.name}</span>
		);

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}
