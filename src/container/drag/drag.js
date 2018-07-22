import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './drag.css';

class Drag extends Component {
  render() {
    return (
      <div className="drag-wrapper">
        <h2>Drag Component</h2>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Drag);