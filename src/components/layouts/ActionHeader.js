import React from 'react'
import './ActionHeader.css';

const ActionHeader = (props) => {
    return (
        <div className="action-header">
            <h3>{props.leftComponent}</h3>
            <h3>{props.rightComponent}</h3>
        </div>
    )
}
export default ActionHeader