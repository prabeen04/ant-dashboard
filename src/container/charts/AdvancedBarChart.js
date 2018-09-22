import React, { Component } from 'react'
import { Button } from "antd";
import { BarChart, PieChart, Pie, Bar, Brush, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import moment from 'moment';

class AdvancedBarChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-01T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00002",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-02T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00003",
                    eventType: "meeting",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-03T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00004",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-04T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00005",
                    eventType: "meeting",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-05T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00006",
                    eventType: "email",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-06T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00007",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-07T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00008",
                    eventType: "meeting",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-08T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00009",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-09T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },

            ],
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
        const newData = this.state.data.map((event, i) => ({ eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).day() }))
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
                    <Pie data={this.state.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
                        {
                            data01.map((entry, index) => <Cell fill={entry.color} />)
                        }
                    </Pie>
                    <Pie data={this.state.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
                        {
                            data02.map((entry, index) => <Cell fill={entry.color} />)
                        }
                    </Pie>
                    <Tooltip />
                    {/* <Legend/> */}
                </PieChart>
            </div>
        )
    }
}

export default AdvancedBarChart;