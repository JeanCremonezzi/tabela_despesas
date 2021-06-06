import Expenses from "./components/Expenses/Expenses";

function App() {
	const expenses = [
		{
			id: "expense0",
			title: "Car Insurance",
			amount: 300.0,
			date: new Date(2021, 5, 4),
		},
		{
			id: "expense1",
			title: "New TV",
			amount: 1000.0,
			date: new Date(2021, 6, 25),
		},
		{
			id: "expense2",
			title: "New Desk",
			amount: 399.99,
			date: new Date(2021, 5, 18),
		},
	];

	return <Expenses items={expenses} />;
}

export default App;
