import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';

import './dnd.css';

class DndTarget extends Component {
  render() {
    return (
      <div className="dnd-target">
        <h2>DndTarget Component</h2>
      </div>
    )
  }
}
export default DropTarget(types, spec, collect)(DndTarget);
