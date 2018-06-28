import React from 'react'
import { DragSource } from 'react-dnd'
import ColumnGroup from 'antd/lib/table/ColumnGroup';

const itemSource = {    
      isDragging(props, monitor) {
          //console.log('-------isDraging-----------')
        return monitor.getItem().id === props.id;
      },
    
      beginDrag(props, monitor, component) {
        //console.log('-------beginDrag-----------')
        // Return the data describing the dragged item
        const item = { id: props.id };
        return item;
      },
    
      endDrag(props, monitor, component) {
          return props.handleDrag(props.item.id)
        //console.log('-------endDrag-----------')
        if (!monitor.didDrop()) {
          return;
        }
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        console.log(dropResult)
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
        const { isDragging, connectDragSource, src } = this.props;
        const opacity = isDragging ? 0 : 1
        return connectDragSource(
            <div className="item" style={{opacity}}>
                <p>{this.props.item.value}</p>
            </div>
        )
    }

}
export default DragSource('item', itemSource, collect)(Item)