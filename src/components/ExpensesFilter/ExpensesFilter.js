import "./ExpensesFilter.css";

function ExpensesFilter(props) {
	const filterHandler = (event) => {
		props.onFilterChange(event.target.value);
	};

	return (
		<section className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={props.selectedFilter} onChange={filterHandler}>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
				</select>
			</div>
		</section>
	);
}

export default ExpensesFilter;
