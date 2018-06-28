import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import './dnd.css';

const spec = {
  canDrop(props, monitor) {
    console.log('-----canDrop-------')
    const item = monitor.getItem();
    return;
  },

  hover(props, monitor, component) {
    console.log('-----hover-------')
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();
    const isJustOverThisOne = monitor.isOver({ shallow: true });
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    console.log('-----drop-------')
    if (monitor.didDrop()) {
      return;
    }
    const item = monitor.getItem();
    return { moved: true };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class DndTarget extends Component {
  render() {
    const { isOver, canDrop, connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="dnd-target">
        <h2>DndTarget Component</h2>
      </div>
    )
  }
}
export default DropTarget('item', spec, collect)(DndTarget);
