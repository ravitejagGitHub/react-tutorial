import { Component } from "react";

export class ProductHeader extends Component {
	render() {
		const { headers } = this.props;
		return (
			<thead class="header">
				{headers.map((header) => (
					<th class="header__column">{header}</th>
				))}
			</thead>
		);
	}
}
