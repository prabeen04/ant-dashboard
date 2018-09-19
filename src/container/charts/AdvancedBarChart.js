import React, { Component } from 'react'
import {
    BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
    XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, Label
} from 'recharts';
class AdvancedBarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
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
                // { name: '11', amt: 8744 },
                // { name: '12', amt: 9800 },
                // { name: '13', amt: 5410 },
                // { name: '14', amt: 5000 },
                // { name: '15', amt: 1222 },
                // { name: '16', amt: 8744 },
                // { name: '17', amt: 9800 },
                // { name: '18', amt: 5410 },
                // { name: '19', amt: 5000 },
                // { name: '20', amt: 1222 },
                // { name: '21', amt: 8744 },
                // { name: '22', amt: 9800 },
                // { name: '23', amt: 5410 },
                // { name: '24', amt: 5000 },
                // { name: '25', amt: 1222 },
                // { name: '26', amt: 8744 },
                // { name: '27', amt: 9800 },
                // { name: '28', amt: 5410 },
                // { name: '29', amt: 5000 },
                // { name: '30', amt: 1222 },
            ]
        }
    }
    displayTick = (tick) => {
        return `Day ${tick}`;
    }
    render() {
        return (
            <div>
                <h3>AdvancedBarChart Component</h3>
                <BarChart width={this.props.width} height={this.props.height} data={this.state.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        tickFormatter={this.displayTick}>
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amt" fill="#8884d8" barSize={20} />
                    {/* <Bar dataKey="uv" fill="#82ca9d" barSize={20} /> */}
                </BarChart>
            </div>
        )
    }
}

export default AdvancedBarChart;