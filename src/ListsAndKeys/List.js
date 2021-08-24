function ListItem(props) {
	// Correct! There is no need to specify the key here:
	const { key, value } = props;
	console.log(key); // Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:
	console.log(value);
	return <li>{value}</li>;
}

export function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) => (
		// Correct! Key should be specified inside the array.
		<ListItem key={number.toString()} value={number} />
	));
	return <ul>{listItems}</ul>;
}
