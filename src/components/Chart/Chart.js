import './Chart.css';
import ChartBar from './ChartBar';
function Chart(props){
    const dataPointValues = props.dataPoints.map(item => item.value);
    const totalMaximum= Math.max(...dataPointValues); //spread operator= separate
    return <div className="chart">
        {props.dataPoints.map(dataPoint=><ChartBar value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} key={dataPoint.label}/>)}
    </div>
}

export default Chart