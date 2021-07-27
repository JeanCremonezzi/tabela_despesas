import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense(props) {
	const [isEditing, setIsEditing] = useState(false);

	const editingHandler = () => {
		setIsEditing(!isEditing);
	};

	const submitExpenseHandler = (expenseData) => {
		props.onAddNewExpense(expenseData);
	};

	return (
		<section className="new-expense">
			{!isEditing ? (
				<button onClick={editingHandler}>Add New Expense</button>
			) : (
				<ExpenseForm
					onSubmitExpense={submitExpenseHandler}
					editingHandler={editingHandler}
				/>
			)}
		</section>
	);
}

export default NewExpense;
