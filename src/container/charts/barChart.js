import React, { Component } from 'react'
import {
    BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
    XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, Label
} from 'recharts';
const data1 = [
    { name: '1', amt: 4500 },
    { name: '2', amt: 6500 },
    { name: '3', amt: 5000 },
    { name: '4', amt: 5000 },
    { name: '5', amt: 5000 },
    { name: '6', amt: 4000 },
    { name: '7', amt: 9800 },
    { name: '8', amt: 5410 },
    { name: '9', amt: 5000 },
    { name: '10', amt: 1222 },
    { name: '11', amt: 8744 },
    { name: '12', amt: 9800 },
    { name: '13', amt: 5410 },
    { name: '16', amt: 8744 },
];

function BarChart1({ width, height, data }) {
    return (
        <div style={{ display: 'flex', margin: '0.2rem' }}>
            <BarChart width={width} height={height} data={data || data1}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name">
                    <Label value="Pages of my website" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amt" fill="#8884d8" barSize={20} />
            </BarChart>
        </div>
    )
}

export default BarChart1