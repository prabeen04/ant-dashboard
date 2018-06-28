import React from 'react'
import { DragSource } from 'react-dnd'
const Types = {
    Item: 'item'
}
const itemSource = {    
      isDragging(props, monitor) {
          console.log('-------isDraging-----------')
        return monitor.getItem().id === props.id;
      },
    
      beginDrag(props, monitor, component) {
        console.log('-------beginDrag-----------')
        // Return the data describing the dragged item
        const item = { id: props.id };
        return item;
      },
    
      endDrag(props, monitor, component) {
        console.log('-------endDrag-----------')
        if (!monitor.didDrop()) {
          return;
        }
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
      }
}
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { isDragging, connectDragSource, src } = this.props
        return connectDragSource(
            <div className="item">
                <p>{this.props.item.value}</p>
            </div>
        )
    }

}
export default DragSource(Types.Item, itemSource, collect)(Item)