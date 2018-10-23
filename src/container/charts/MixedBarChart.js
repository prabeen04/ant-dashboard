import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { setMixedBarChartData } from "../../actions/chartsAction";

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
class MixedBarChart extends Component {
    componentDidMount(){
        const { data, viewType } = this.props;
        this.props.setMixedBarChartData(viewType, data);
    }
    render() {
        return (
            <div>
                <BarChart width={600} height={300} data={this.props.mixedBarChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="days" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="call" stackId="a" fill="#8884d8" />
                    <Bar dataKey="meeting" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="email" stackId="a" fill="tomato" />
                </BarChart>
            </div>
        )
    }
}
const mapStateToProps = ({chartsReducer}) => ({
    mixedBarChartData: chartsReducer.mixedBarChartData,
    viewType: chartsReducer.viewType,
    data: chartsReducer.data
})
const mapDispatchToProps =dispatch => bindActionCreators({
    setMixedBarChartData
 }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MixedBarChart);