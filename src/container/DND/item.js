import React from 'react'
import { DragSource } from 'react-dnd'
const Types = {
    ITEM: 'item'
}
const itemSource = {
    beginDrag(props) {
        const item = { id: props.id };
        return item;
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

class Item extends React.Component {
    constructor(props){
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
export default DragSource(Types.ITEM, itemSource, collect)(Item)