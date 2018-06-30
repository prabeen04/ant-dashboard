import React from 'react'
import { DragSource } from 'react-dnd'
import ColumnGroup from 'antd/lib/table/ColumnGroup';

const itemSource = {
    beginDrag(props, monitor, component) {
        return props.item;
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            console.log('item didn\'t drop in target')
            return;
        }
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        console.log(dropResult)
        console.log(item)
        return props.handleDrag(props.item.id)
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
        const { isDragging, connectDragSource, item } = this.props;
        const opacity = isDragging ? 0.3 : 1
        return (
            connectDragSource &&
            connectDragSource(<div className="item" style={{opacity }}><p>{item.value}</p></div>)
        )
    }

}
export default DragSource('item', itemSource, collect)(Item)