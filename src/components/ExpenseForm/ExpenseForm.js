import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
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

	const submitFormHandler = (event) => {
		event.preventDefault();

		const formatDate = new Date(date);

		formatDate.setMinutes(
			formatDate.getTimezoneOffset() + formatDate.getMinutes()
		);

		const data = {
			title,
			amount: +amount,
			date: formatDate,
		};

		setTitle("");
		setAmount("");
		setDate("");

		props.onSubmitExpense(data);
		props.editingHandler();
	};

	return (
		<form onSubmit={submitFormHandler}>
			<section className="new-expense__controls">
				<fieldset className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={titleChangeHandler} />
				</fieldset>

				<fieldset className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={amount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</fieldset>

				<fieldset className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={date}
						min="2021-01-01"
						onChange={dateChangeHandler}
					/>
				</fieldset>
			</section>

			<section className="new-expense__actions">
				<button type="button" onClick={props.editingHandler}>Cancel</button>
				<button type="submit">Add Expense</button>
			</section>
		</form>
	);
}

export default ExpenseForm;
