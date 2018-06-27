import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import './dnd.css';
const Types = {
  CHESSPIECE: 'item'
};

const spec = {
  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    const item = monitor.getItem();
    return canMakeChessMove(item.fromPosition, props.position);
  },

  hover(props, monitor, component) {
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();
    const isJustOverThisOne = monitor.isOver({ shallow: true });
    const canDrop = monitor.canDrop();
  },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    // You can do something with it
    ChessActions.movePiece(item.fromPosition, props.position);
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
    return (
      <div className="dnd-target">
        <h2>DndTarget Component</h2>
      </div>
    )
  }
}
export default DropTarget(types, spec, collect)(DndTarget);
