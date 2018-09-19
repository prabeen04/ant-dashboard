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
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },
                {
                    eventId: "EVEN00001",
                    eventType: "call",
                    eventOwnerId: "user00001",
                    eventHeading: "eventHeading",
                    eventDescription: "eventDescription",
                    timeZone: "UCT",
                    startDate: "2018-09-19T21:30:17+05:30",
                    endDate: "2018-09-19T21:35:17+05:30",
                    eventStatus: "pending",
                    accountId: "AC0001",
                    opportunityId: "opportunityId",
                    contactId: "contactId",
                    userId: "USER00001",
                    organizationId: "organizationId",
                    eventClosureDate: "2018-09-19T21:30:17+05:30"
                },

            ]
        }
    }
    displayXTick = (tick) => {
        return `Day ${tick}`;
    }
    displayYTick = (tick) => {
        return `Day ${tick}`;
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
                        dataKey="eventId"
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