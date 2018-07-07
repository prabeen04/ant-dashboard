import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';

class LineChart1 extends Component {
    render() {
        return (
            <div>
                <h1>LineChart Component</h1>
                <LineChart width={400} height={400} data={[
                { label: 'Inquiries', value: 5000 },
                { label: 'Applicants', value: 2500 },
                { label: 'Admits', value: 500 },
                { label: 'Deposits', value: 200 },
            ]}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}

export default LineChart1;