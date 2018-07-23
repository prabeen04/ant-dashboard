import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { DropTarget } from 'react-dnd';
import TeamBox from './teamBox';
const spec = {
    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            console.log('it did drop in target')
            return;
        }
        const item = monitor.getItem();
        return item;
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}
class TeamStage extends Component {
    render() {
        const { isOver, canDrop, connectDropTarget } = this.props;
        const renderTeams = this.props.teams
            .filter((team) => team.stage === this.props.stage)
            .map((team, index) => <TeamBox key={index} team={team} />)

        return connectDropTarget(
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
TeamStage = DropTarget('stage', spec, collect)(TeamStage)
export default connect(mapStateToProps)(TeamStage);