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

	return (
		<Card className="expenses">
			<ExpensesFilter
				onFilterChange={filterChangeHandler}
				selectedFilter={filter}
			/>

			{props.items.map((expense) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				);
			})}
		</Card>
	);
}

export default Expenses;
