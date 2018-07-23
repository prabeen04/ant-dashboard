import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
class TeamStage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const backgroundColor = this.props.backgroundColor || '#fff';
        const renderStages = this.props.stages.map((stage, index) => {
            console.log(stage)
            return (
                <div key={index}>
                    <h3>{stage}</h3>
                </div>
            )
        })
        return (
            <div className="team-stage">
                {renderStages}
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