import React from 'react'
import { DragSource } from 'react-dnd'
const Types = {
    ITEM: 'toy'
   }
   const itemSource = {
    beginDrag(props) {
    /* code here */
    },
    endDrag(props) {
    /* code here */
    }
   }
   function collect(connect, monitor) {
    return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
    }
   }

const Item = (props) => {
  return (
    <div className="item">
      <p>{props.item.value}</p>
    </div>
  )
}
export default DragSource(Types.ITEM, itemSource, collect)(Item)