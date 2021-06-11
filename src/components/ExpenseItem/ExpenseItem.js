import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const buttonClickHandler = () => {
		setTitle("Changed!");
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />

			<div className="expense-item__description">
				<p className="expense-item__title">{title}</p>
				<p className="expense-item__price">$ {props.amount}</p>
			</div>

			<button onClick={buttonClickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;
