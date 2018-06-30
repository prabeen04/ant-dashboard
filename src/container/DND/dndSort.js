import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { flow } from 'lodash';

const cardSource = {
    beginDrag(props) {
        console.log('dragging begin')
        return {
            id: props.id,
            index: props.index,
        }
    },
}

const cardTarget = {

}
function collect1(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
    }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

class DndSort extends Component {
    render() {
        const { connectDragSource, connectDropTarget } = this.props;
        return connectDragSource(
            connectDropTarget(<div className="item">
                <h2>{this.props.item.value}</h2>
            </div>)
        )
    }
}
export default flow([
    DragSource('sort', cardSource, collect),
    DropTarget('sort', cardTarget, collect1)]
)(DndSort);