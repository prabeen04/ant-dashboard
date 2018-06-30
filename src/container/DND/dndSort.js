import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { flow } from 'lodash';

const cardSource = {
    beginDrag(props) {
        return { id: 1 }
    }
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
        return (
            <div>
                <h2>DndSort Component</h2>
            </div>
        )
    }
}
export default flow([
    DragSource('sort', cardSource, collect),
    DropTarget('sort', cardTarget, collect1)]
)(DndSort);