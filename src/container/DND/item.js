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
 collect(connect, monitor) {
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
        return connectDragSource(
            <div className="item">
                <p>{this.props.item.value}</p>
            </div>
        )
    }

}
export default DragSource(Types.ITEM, itemSource, collect)(Item)