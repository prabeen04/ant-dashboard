import React from 'react';
import PropTypes from 'prop-types'
import './ActionHeader.css';

const ActionHeader = (props) => {
    return (
        <div className="action-header">
            <div>{props.leftComponent}</div>
            <div>{props.rightComponent}</div>
        </div>
    )
}
ActionHeader.propTypes = {
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element
}
export default ActionHeader