import React, { Component } from 'react'
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { dragTeam } from "../../actions/dragAction";
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
        props.dragTeam(item, 'rel')
        return item;
    }
};

function collect(connect, monitor) {
    console.log(monitor)
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}
function RelStage(props) {
    const { isOver, canDrop, connectDropTarget } = props;
    const backgroundColor = canDrop ? 'tomato' : '#fff';
    const opacity = canDrop ? 0.8 : 0;
    return connectDropTarget(
        <div className="champ-stage" style={{ backgroundColor, opacity }}>
            <h3>Relegated</h3>
        </div>
    )
}
const mapDispatchToProps = dispatch => bindActionCreators({ dragTeam }, dispatch)
RelStage = DropTarget('stage', spec, collect)(RelStage);
export default connect(null, mapDispatchToProps)(RelStage)