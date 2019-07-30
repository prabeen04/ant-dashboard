import React, { Component } from 'react';
import { connect } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { mixedBarChartSelector } from "../../selectors/chartsSelector";

function MixedBarChart() {
    return (
        <div>
            <BarChart width={500} height={300} data={this.props.mixedBarChartData}
                margin={{ top: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="days" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="call" stackId="a" fill="#8884d8" barSize={30} />
                <Bar dataKey="meeting" stackId="a" fill="#82ca9d" barSize={30} />
                <Bar dataKey="email" stackId="a" fill="tomato" barSize={30} />
            </BarChart>
        </div>
    )
}
const mapStateToProps = ({ chartsReducer }) => ({
    mixedBarChartData: mixedBarChartSelector(chartsReducer.data, chartsReducer.mixedBarChartData),
    viewType: chartsReducer.viewType,
    data: chartsReducer.data
})
export default connect(mapStateToProps, mapDispatchToProps)(MixedBarChart);