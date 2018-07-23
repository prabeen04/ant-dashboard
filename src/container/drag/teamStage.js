import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import TeamBox from './teamBox';

class TeamStage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const renderTeams = this.props.teams
            .filter((team) => team.stage === this.props.stage)
            .map((team, index) => <TeamBox key={index} team={team} />)

        return (
            <div className="team-stage">
                {this.props.stage}
                {renderTeams}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        teams: state.dragReducer.teams
    }
}
export default connect(mapStateToProps)(TeamStage);