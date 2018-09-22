import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button } from "antd";
import { BarChart, PieChart, Pie, Bar, Brush, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import moment from 'moment';

class AdvancedBarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: []
        }
    }
    displayXTick = (tick) => {
        return `day ${tick}`;
    }
    displayYTick = (tick) => {
        return `Day ${tick}`;
    }
    componentDidMount() {
        const newData = this.props.data.map((event, i) => ({ eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).day() }))
            .reduce((acc, data, i, arr) => {
                if (!acc[data.eventType]) {
                    acc[data.eventType] = 1;
                } else {
                    acc[data.eventType] += 1;
                }
                return acc;
            }, {});
        console.log(newData);
        const eventArr = Object.entries(newData)
            .reduce((acc, node, i, arr) => {
                console.log(node)
                let [type, val] = node;
                console.log(type)
                let item = {
                    name: type,
                    value: val
                }

                acc.push(item)
                return acc;
            }, []);
        console.log(eventArr)
        this.setState({
            chartData: eventArr
        })
    }
    render() {
        return (
            <div>
                <h3>AdvancedBarChart Component</h3>
                <div className="flex-container">

                </div>
                <BarChart width={this.props.width} height={this.props.height} data={this.state.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="type"
                        tickFormatter={this.displayXTick}>
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" barSize={20} />
                </BarChart>
                <PieChart width={this.props.width} height={this.props.height} >
                    <Pie data={this.state.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} />
                    <Tooltip />
                </PieChart>
            </div>
        )
    }
}

const mapStateToProps = ({chartsReducer}) => {
    return{
        data: chartsReducer.data
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvancedBarChart);