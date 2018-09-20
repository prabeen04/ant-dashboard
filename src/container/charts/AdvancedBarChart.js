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
    componentDidMount(){
        const newData =  this.state.data.map((event, i) => ({eventId: event.eventId, eventType: event.eventType, startDate: moment(event.startDate).day()}))
                         .reduce((acc, data, i, arr) => {
                             console.log(acc[data.eventType])
                            if (data.eventType  == acc[data.eventType]) {
                                acc.push({startDate: data.startDate,  eventType: data.eventType, count: 3 })
                                // acc[data.startDate]++;
                              }
                              else {
                                acc.push({startDate: data.startDate,  eventType: data.eventType , count: 2})
                              }
                            return acc
                         }, []);
            // console.log(newData);                
        // this.setState({
        //     chartData: newData
        // })
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
                        dataKey="eventId"
                        tickFormatter={this.displayXTick}>
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="startDate" fill="#8884d8" barSize={20} />
                </BarChart>
            </div>
        )
    }
}

export default AdvancedBarChart;