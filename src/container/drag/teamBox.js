import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

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
        return props.handleDrag(props.item.id)
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

export default DragSource('stage', itemSource, collect)(TeamBox);