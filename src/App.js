import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const addNewExpenseHandler = (expense) => {
		expense = { ...expense, id: expenses.length + 1 };
		console.log(expense);
	};

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

	return (
		<main>
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
			<Expenses items={expenses} />
		</main>
	);
}

export default App;
