import "./SplitPane.css";

export function SplitPane(props) {
	return (
		<div className="splitpane">
			<div className="splitpane__left">{props.left}</div>
			<div className="splitpane__right">{props.right}</div>
		</div>
	);
}
