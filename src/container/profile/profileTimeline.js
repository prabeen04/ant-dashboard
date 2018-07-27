import React, { Component } from 'react'
import { connect } from "react-redux";
import { Timeline, TimelineEvent } from 'react-event-timeline'

class ProfileTimeline extends Component {
    render() {
        const timelineEvents = this.props.profiles.map((post, index) => {
            return <TimelineEvent title="John Doe sent a SMS"
                                  createdAt="2016-09-12 10:06 PM"
                                  icon={<i className="material-icons md-18">textsms</i>}
                                 >
                                I received the payment for $543. Should be shipping the item within a couple of hours.
                    </TimelineEvent>
        });
        return (
            <Timeline>
                {timelineEvents}
            </Timeline>
        )
    }
}
const mapStateToProps = state => {
    console.log(state.profileReducer.profiles)
    return {
        profiles: state.profileReducer.profiles
    }
}

export default connect(mapStateToProps)(ProfileTimeline);