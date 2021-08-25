import { FancyBorder } from "./FancyBorder";

export function WelcomeDialog(props) {
	return (
		<FancyBorder color={props.color}>
			<h1 className="Dialog-title">Welcome</h1>
			<p className="Dialog-message">Thank you for visiting our spacecraft!</p>
		</FancyBorder>
	);
}
