import {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {	
	const [expenses, setExpenses] = useState([])

	const addNewExpenseHandler = (expense) => {
		expense = { ...expense, id: expenses.length + 1 };

		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<main>
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
			<Expenses items={expenses} />
		</main>
	);
}

export default App;
