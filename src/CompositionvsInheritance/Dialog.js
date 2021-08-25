import { FancyBorder } from "./FancyBorder";

export function Dialog(props) {
	return (
		<FancyBorder color={props.color}>
			<h1 className="dialog__title">{props.title}</h1>
			<p className="dialog__message">{props.message}</p>
		</FancyBorder>
	);
}
