import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
class TeamStage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const backgroundColor = this.props.backgroundColor || '#fff';
        return (
            <div className="team-stage" style={{ backgroundColor, filter: 'blur(16px)' }}>
                <div>{this.props.team.name}</div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        stages: state.dragReducer.stages
    }
}
export default connect(mapStateToProps)(TeamStage);