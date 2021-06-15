import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

function NewExpense(props) {
	const submitExpenseHandler = (expenseData) => {
		props.onAddNewExpense(expenseData);
	};

	return (
		<section className="new-expense">
			<ExpenseForm onSubmitExpense={submitExpenseHandler} />
		</section>
	);
}

export default NewExpense;
