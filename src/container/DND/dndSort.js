import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd';
import { flow } from 'lodash';

const cardSource = {
    beginDrag(props) {
        console.log('dragging begin')
        console.log(props.index)
        return {
            id: props.id,
            index: props.index,
        }
    },
}

const cardTarget = {
    hover(props, monitor, component) {
        if (!component) {
            return null
        }
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            console.log('drag === hover')
            return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect()

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        // Determine mouse position
        const clientOffset = monitor.getClientOffset()

        // Get pixels to the top
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        // Time to actually perform the action
        props.moveItem(dragIndex, hoverIndex)

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex
    },
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