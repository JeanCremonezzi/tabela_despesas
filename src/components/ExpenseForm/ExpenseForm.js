import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
	const [title, setTitle] = useState("");
	const [amount, setAmount] = useState("");
	const [date, setDate] = useState("");

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setDate(event.target.value);
	};

	return (
		<form>
			<section className="new-expense__controls">
				<fieldset className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</fieldset>

				<fieldset className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</fieldset>

				<fieldset className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2021-01-01" onChange={dateChangeHandler} />
				</fieldset>
			</section>

			<section className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</section>
		</form>
	);
}

export default ExpenseForm;
