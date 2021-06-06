import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

function Expenses(props) {
	return (
		<Card className="expenses">
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
