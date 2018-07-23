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
        props.dragTeam(item, props.stage)
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
        const backgroundColor = isOver ?'#eee' :'#fff'
        const renderTeams = this.props.teams
            .filter((team) => team.stage === this.props.stage)
            .map((team, index) => <TeamBox key={index} team={team} />)

        return connectDropTarget(
            <div className="team-stage" style={{backgroundColor}}>
                <div className="stage-header">{this.props.stage}</div>
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
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        dragTeam
    }, dispatch)
}
TeamStage = DropTarget('stage', spec, collect)(TeamStage)
export default connect(mapStateToProps, mapDispatchToProps)(TeamStage);