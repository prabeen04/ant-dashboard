import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
class TeamStage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const backgroundColor = this.props.backgroundColor || '#fff';
        const renderTeams = this.props.teams
            .filter((team) => {
                return team.stage === this.props.stage
            })
            .map((team, index) => {
                return (
                    <div key={index}>
                        <h3>{team.name}</h3>
                    </div>
                )
            })
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
        stages: state.dragReducer.stages,
        teams: state.dragReducer.teams
    }
}
export default connect(mapStateToProps)(TeamStage);