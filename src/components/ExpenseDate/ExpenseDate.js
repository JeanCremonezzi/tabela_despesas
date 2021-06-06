import "./ExpenseDate.css";

function ExpenseDate(props) {
	const day = props.date.toLocaleString("pt-br", { day: "numeric" });
	const month = props.date.toLocaleString("pt-br", { month: "long" });
	const year = props.date.getFullYear();

	return (
		<div className="expense-date">
			<span className="expense-date__day">{day}</span>
			<span className="expense-date__month">{month}</span>
			<span className="expense-date__year">{year}</span>
		</div>
	);
}

export default ExpenseDate;
