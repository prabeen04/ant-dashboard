import React, { Component } from 'react';
import { DragSource } from "react-dnd";
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
class Jbox extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        const opacity = isDragging ? 0 : 1
        return connectDragSource(
            <div className="jumpstart-box-dnd" style={{ opacity }}>
                {this.props.box.title}: {this.props.box.value}
            </div>
        )
    }
}

export default DragSource('jumpstartBox', itemSource, collect)(Jbox);