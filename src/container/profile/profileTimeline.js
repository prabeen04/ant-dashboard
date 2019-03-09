import React, { Component } from 'react'
import { connect } from "react-redux";
import { Timeline, TimelineEvent } from 'react-event-timeline'
import { Icon } from 'antd';

function ProfileTimeline(props) {
    const timelineEvents = props.profiles.map((profile, index) => {
        const iconType = profile.email === 'manutd'
            ? <Icon style={{ fontSize: 15 }} type="phone" />
            : <Icon style={{ fontSize: 15 }} type="mail" />
        const iconColor = profile.email === 'manutd'
            ? "lightgreen"
            : "tomato"
        return <TimelineEvent
            title={profile.name}
            createdAt={profile.location}
            icon={iconType}
            iconColor={iconColor}
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
const mapStateToProps = ({ profileReducer }) => ({
    profiles: profileReducer.profiles
})

export default connect(mapStateToProps)(ProfileTimeline);