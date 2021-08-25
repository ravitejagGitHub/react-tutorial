export function BoilingVerdict(props) {
	return (
		<p>
			{props.celsius >= 100
				? "The water would boil"
				: "The water would not boil."}
		</p>
	);
}
