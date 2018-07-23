import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DragSource } from 'react-dnd';
import { dragTeam } from "../../actions/dragAction.js";
const itemSource = {
    beginDrag(props, monitor, component) {
        return props.team;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            console.log('item didn\'t drop in target')
            return;
        }
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        // return props.dragTeam(props.team)
    }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class TeamBox extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;

    return connectDragSource(
      <div className="team-box">
        <h3>{this.props.team.name}</h3>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        dragTeam
    }, dispatch)
}
TeamBox = DragSource('stage', itemSource, collect)(TeamBox);
export default connect(null, mapDispatchToProps)(TeamBox);