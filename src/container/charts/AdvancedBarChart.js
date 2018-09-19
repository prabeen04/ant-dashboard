import React, { Component } from 'react'
import { Button } from "antd";
import { BarChart, Bar, Brush, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
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
                    startDate: "2018-09-1T21:30:17+05:30",
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
                    startDate: "2018-09-2T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00003",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-3T21:30:17+05:30",
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
                    startDate: "2018-09-4T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00005",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-5T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00006",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-6T21:30:17+05:30",
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
                    startDate: "2018-09-7T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00008",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-8T21:30:17+05:30",
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
                    startDate: "2018-09-9T21:30:17+05:30",
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
    componentDidMount(){
        const newData = [];
        this.state.data.map((event, i) => {
            newData.push({eventId: event.eventId, startDate: event.startDate,});
        })
        console.log(newData)
    }
    render() {
        return (
            <div>
                <h3>AdvancedBarChart Component</h3>
                <div className="flex-container">

                </div>
                <BarChart width={this.props.width} height={this.props.height} data={this.state.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="startDate"
                        tickFormatter={this.displayXTick}>
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis
                        dataKey="startDate"
                        tickFormatter={this.displayYTick} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={"startDate"} fill="#8884d8" barSize={20} />
                    {/* <Bar dataKey="uv" fill="#82ca9d" barSize={20} /> */}
                </BarChart>
            </div>
        )
    }
}

export default AdvancedBarChart;