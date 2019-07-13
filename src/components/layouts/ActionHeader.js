import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from "react-spring/renderprops";
import { StyledActionHeader } from "../UI/Layout";
const ActionHeader = (props) => {
    return (
        <StyledActionHeader>
            <Spring
                delay={500}
                from={{ opacity: 0, transform: 'translate3d(200px,0,0) ', }}
                to={{ opacity: 1, transform: 'translate3d(0px,0,0) ' }}>
                {styles => (
                    <div style={styles}>{props.leftComponent}</div>
                )}
            </Spring>
            <Spring
                delay={500}
                from={{ opacity: 0, transform: 'translate3d(-200px,0,0) ', }}
                to={{ opacity: 1, transform: 'translate3d(0px,0,0) ' }}>
                {styles => (
                    <div style={styles}>{props.rightComponent}</div>
                )}
            </Spring>
        </StyledActionHeader>
    )
}
ActionHeader.propTypes = {
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element
}
export default ActionHeader