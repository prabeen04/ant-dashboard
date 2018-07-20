import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DragSource, DropTarget } from "react-dnd";
import { sortJumpstartBox } from '../../../actions/dashboardAction';
import { flow } from 'lodash';
import '../settings.css';

const itemSource = {
    beginDrag(props, monitor, component) {
        // Return the data describing the dragged item
        console.log(props.box)
        const item = { id: props.box.id };
        return item;
    },
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}


const itemTarget = {
    hover(props, monitor, component) {
        // console.log(props)
        // props.sortJumpstartBox('dragIndex', 'hoverIndex')
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
        const hoverBoundingRect = (findDOMNode(component)).getBoundingClientRect()

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
            console.log('1')
            return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            console.log('2')
            return
        }
        console.log('inside itemTarget')
        // Time to actually perform the action
        props.sortJumpstartBox(dragIndex, hoverIndex)

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


class Jbox extends Component {
    render() {
        const { connectDragSource, connectDropTarget, isDragging } = this.props;
        const opacity = isDragging ? 0 : 1
        return connectDragSource(
            connectDropTarget(<div className="jumpstart-box-dnd" style={{ opacity }}>
                {this.props.box.title}: {this.props.box.value}
            </div>)
        )
    }
}
const mapStateToProps = state => {
    return{}
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        sortJumpstartBox
    }, dispatch)
}
Jbox = flow([
    DragSource('jumpstartBox', itemSource, collect),
    DropTarget('jumpstartBox', itemTarget, collect1)
])(Jbox);
export default connect(mapStateToProps, mapDispatchToProps)(Jbox);