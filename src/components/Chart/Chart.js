import "./Chart.css";

import ChartBar from "../ChartBar/ChartBar";

function Chart(props) {
	const values = props.chartDataPoints.map((dataPoint) => {
		return dataPoint.value;
	});

	const totalMaximum = Math.max(...values);

	return (
		<div className="chart">
			{props.chartDataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
}

export default Chart;
