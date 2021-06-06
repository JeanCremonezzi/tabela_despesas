import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />

			<div className="expense-item__description">
				<p className="expense-item__title">{props.title}</p>
				<p className="expense-item__price">$ {props.amount}</p>
			</div>
		</Card>
	);
}

export default ExpenseItem;
