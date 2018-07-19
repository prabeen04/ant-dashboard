import React, { Component } from 'react';
import { DragSource } from "react-dnd";
import '../settings.css';

const itemSource = {
    beginDrag(box){
        return box.id
    }
}
class Jbox extends Component {
    render() {
        return (
            <div className="jumpstart-box-dnd">
                {this.props.box.value}
            </div>
        )
    }
}

export default DragSource('jumpstartBox', itemSource, collect)(Jbox);