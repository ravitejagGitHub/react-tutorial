import { Component } from "react";

export class ProductHeader extends Component {
	render() {
		const { headers } = this.props;
		return (
			<thead className="header">
				<tr>
					{headers.map((header) => (
						<th key={header} className="header__column">
							{header}
						</th>
					))}
				</tr>
			</thead>
		);
	}
}
