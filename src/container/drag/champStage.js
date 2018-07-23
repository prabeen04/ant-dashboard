import React, { Component } from 'react'
import { DropTarget } from "react-dnd";

const spec = {
    drop(props, monitor, component) {
        if (monitor.didDrop()) {
            console.log('it did drop in target')
            const item = monitor.getItem();
            console.log(item)
            props.dragTeam(item)
        }
        const item = monitor.getItem();
        console.log(item)
        props.dragTeam(item, props.stage)
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
class ChampStage extends Component {
  render() {
    return (
      <div>
        <h3>ChampStage Component</h3>
      </div>
    )
  }
}

export default DropTarget('stage', spec, collect)(ChampStage);