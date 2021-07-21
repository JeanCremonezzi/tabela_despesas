import { useState } from "react";
import "./Expenses.css";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
	const [filter, setFilter] = useState("2021");

	const filterChangeHandler = (filter) => {
		setFilter(filter);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filter
	});

	let expensesContent = <p>No expenses found!</p>;

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense => {
			return (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			); 
		}))
	}

	return (
		<Card className="expenses">
			<ExpensesFilter
				onFilterChange={filterChangeHandler}
				selectedFilter={filter}
			/>

			{expensesContent}

		</Card>
	);
}

export default Expenses;
