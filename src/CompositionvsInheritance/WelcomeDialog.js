import { Dialog } from "./Dialog";

export function WelcomeDialog(props) {
	return (
		<Dialog
			color={props.color}
			title="Welcome"
			message="Thank you for visiting our spacecraft!"
		/>
	);
}
