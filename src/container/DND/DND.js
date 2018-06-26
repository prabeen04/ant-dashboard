import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndItems from './dndItems';
import DndTarget from './dndTarget';
import './dnd.css';


class DND extends Component {
  render() {
    return (
      <div className="dnd-wrapper">
        <DndItems/>
        <DndTarget/>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DND);