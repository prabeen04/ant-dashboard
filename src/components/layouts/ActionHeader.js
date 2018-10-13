import React from 'react';
import PropTypes from 'prop-types';
import { StyledActionHeader } from "../UI/Layout";
const ActionHeader = (props) => {
    return (
        <StyledActionHeader>
            <div>{props.leftComponent}</div>
            <div>{props.rightComponent}</div>
        </StyledActionHeader>
    )
}
ActionHeader.propTypes = {
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element
}
export default ActionHeader