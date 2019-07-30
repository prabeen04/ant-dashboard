import React, { Component } from 'react';
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { mixedBarChartSelector } from "../../selectors/chartsSelector";

function MixedBarChart(props) {
    const mixedData = useSelector(({ chartsReducer }) => ({
        mixedBarChartData: mixedBarChartSelector(chartsReducer.data, chartsReducer.mixedBarChartData),
        viewType: chartsReducer.viewType,
        data: chartsReducer.data
    }))
    return (
        <div>
            <BarChart width={500} height={300} data={mixedData.mixedBarChartData}
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
export default MixedBarChart;