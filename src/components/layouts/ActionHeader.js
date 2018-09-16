import React from 'react';
import PropTypes from 'prop-types'
import './ActionHeader.css';

const ActionHeader = (props) => {
    return (
        <div className="action-header">
            <h3>{props.leftComponent}</h3>
            <h3>{props.rightComponent}</h3>
        </div>
    )
}
ActionHeader.prototype = {
    leftComponent: PropTypes.string,
    rightComponent: PropTypes.string,
}
export default ActionHeader