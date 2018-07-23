import React, { Component } from 'react';

class TeamStage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const backgroundColor = this.props.backgroundColor || '#fff';
        return (
            <div className="team-stage" style={{ backgroundColor }}>
                <div>{this.props.team.name}</div>
            </div>
        )
    }
}

export default TeamStage;