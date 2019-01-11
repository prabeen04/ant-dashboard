import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from "react-spring";
import { StyledActionHeader } from "../UI/Layout";
const ActionHeader = (props) => {
    return (
        <StyledActionHeader>
            <Spring
                delay={500}
                from={{ transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)', }}
                to={{ transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)' }}>
                {styles => (
                    <div style={styles}>{props.leftComponent}</div>
                )}
            </Spring>
            <div>{props.rightComponent}</div>
        </StyledActionHeader>
    )
}
ActionHeader.propTypes = {
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element
}
export default ActionHeader