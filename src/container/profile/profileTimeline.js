import React, { Component } from 'react'
import { connect } from "react-redux";
import { Timeline, TimelineEvent } from 'react-event-timeline'
import { Icon } from 'antd';
class ProfileTimeline extends Component {
    render() {
        const timelineEvents = this.props.profiles.map((profile, index) => {
            return <TimelineEvent title={profile.name}
                createdAt={profile.location}
                icon={<Icon style={{ fontSize: 15, color: 'lightgreen' }}
                    type="phone" />}
            >
                {profile.email}
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