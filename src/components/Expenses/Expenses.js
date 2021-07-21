import { useState } from "react";
import "./Expenses.css";

import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

function Expenses(props) {
	const [filter, setFilter] = useState("2021");

	const filterChangeHandler = (filter) => {
		setFilter(filter);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filter;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				onFilterChange={filterChangeHandler}
				selectedFilter={filter}
			/>

			<ExpensesList expenses={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
