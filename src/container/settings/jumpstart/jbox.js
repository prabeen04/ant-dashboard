import React, { Component } from 'react';
import { DragSource } from "react-dnd";
import '../settings.css';

const itemSource = {
    beginDrag(box) {
        console.log(box.id, '----dragging');
        const item = box.id

        return{ item }
    }
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
        return connectDragSource(
            <div className="jumpstart-box-dnd">
                {this.props.box.value}
            </div>
        )
    }
}

export default DragSource('jumpstartBox', itemSource, collect)(Jbox);