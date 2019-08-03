import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { DropTarget } from 'react-dnd';
import { dragTeam } from "../../actions/dragAction";
import TeamBox from './teamBox';
const spec = {
    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            console.log('it did drop in target')
        }
        const item = monitor.getItem();
        console.log(item)
        props.dragTeam(item, props.stage.stageId)
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
function TeamStage(props) {
    const { isOver, canDrop, connectDropTarget } = props;
    const backgroundColor = isOver ? '#eee' : '#fff'
    const renderTeams = props.teams
        .filter((team) => team.stage === props.stage.stageId)
        .map((team, index) => <TeamBox key={index} team={team} />)

    return connectDropTarget(
        <div className="team-stage" style={{ backgroundColor }}>
            <div className="stage-header">{props.stage.name}</div>
            {renderTeams}
        </div>
    )
}
const mapStateToProps = state => ({ teams: state.dragReducer.teams })
const mapDispatchToProps = dispatch => bindActionCreators({ dragTeam }, dispatch)
TeamStage = DropTarget('stage', spec, collect)(TeamStage)
export default connect(mapStateToProps, mapDispatchToProps)(TeamStage);