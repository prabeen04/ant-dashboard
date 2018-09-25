import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button } from "antd";
import { BarChart, PieChart, Pie, Bar, Brush, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import { setPieChartData, setBarChartData, setBarChartData2, setViewType } from '../../actions/chartsAction';
import TimeInterval from '../../components/utils/TimeInterval';

class AdvancedBarChart extends Component {
    displayXTick = (tick) => {
        return `${tick}`;
    }
    displayYTick = (tick) => {
        return `Day ${tick}`;
    }
    componentDidMount() {
        this.props.setPieChartData(this.props.viewType, this.props.data);
        // this.props.setBarChartData(this.props.data);
        this.props.setBarChartData2(this.props.viewType, this.props.data);
    }
    render() {
        const { height, width, pieChartData, barChartData, timeInterval, setViewType } = this.props;
        return (
            <div>
                <div className="flex-container">
                    <TimeInterval
                        times={timeInterval}
                        handleClick={setViewType} />
                </div>
                <BarChart width={width} height={height} data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="days"
                        tickFormatter={this.displayXTick}>
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" barSize={20} />
                </BarChart>
                <PieChart width={width} height={height} >
                    <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} />
                    <Tooltip />
                </PieChart>
            </div>
        )
    }
}

const mapStateToProps = ({ chartsReducer }) => {
    return {
        timeInterval: chartsReducer.timeInterval,
        data: chartsReducer.data,
        pieChartData: chartsReducer.pieChartData,
        barChartData: chartsReducer.barChartData,
        viewType: chartsReducer.viewType
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPieChartData,
        setBarChartData,
        setBarChartData2,
        setViewType,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvancedBarChart);