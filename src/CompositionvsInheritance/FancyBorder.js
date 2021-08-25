import "./FancyBorder.css";
export function FancyBorder(props) {
	return (
		<div className={"fancyBorder fancyBorder--" + props.color}>
			{props.children}
		</div>
	);
}
