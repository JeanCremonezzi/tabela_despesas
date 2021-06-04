import "./ExpenseItem.css";

function ExpenseItem(props) {
	return (
		<section className="expense-item">
			<header>{props.date.toISOString()}</header>

			<main className="expense-item__description">
				<p className="expense-item__title">{props.title}</p>
				<p className="expense-item__price">$ {props.amount}</p>
			</main>
		</section>
	);
}

export default ExpenseItem;
