import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import './dnd.css';

const spec = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      console.log('it did drop in target')
      return;
    }
    const item = monitor.getItem();
    return item;
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
    const background = isOver ?'#ddd': '#fff'
    return connectDropTarget(
      <div className="dnd-target" style={{background}}>
        <h2>DndTarget Component</h2>
      </div>
    )
  }
}
export default DropTarget('item', spec, collect)(DndTarget);
