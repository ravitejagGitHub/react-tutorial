import { Component } from "react";

export class ProductCategoryRow extends Component {
	render() {
		const { category, bgColor } = this.props;
		return (
			<tr style={{ backgroundColor: bgColor }}>
				<th colSpan="2">{category}</th>
			</tr>
		);
	}
}
