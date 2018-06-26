import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class DND extends Component {
  render() {
    return (
      <div>
        <h3>DND Component</h3>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DND);