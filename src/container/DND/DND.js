import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndItems from './dndItems';
import DndTarget from './dndTarget';
import './dnd.css';


class DND extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        { id: 1, value: 'manutd' },
        { id: 2, value: 'chelsea' },
        { id: 3, value: 'mancity' },
        { id: 4, value: 'arsenel' },
        { id: 5, value: 'liverpool' },
        { id: 6, value: 'tottenham' }
      ]
    }
  }
  render() {
    return (
      <div className="dnd-wrapper">
        <DndItems />
        <DndTarget />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DND);