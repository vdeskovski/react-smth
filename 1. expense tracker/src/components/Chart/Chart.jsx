import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dp) => dp.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <>
      <div className="chart">
        {props.dataPoints.map((el, id) => (
          <ChartBar
            key={id}
            value={el.value}
            maxValue={totalMaximum}
            label={el.label}
          />
        ))}
      </div>
    </>
  );
}

export default Chart;
