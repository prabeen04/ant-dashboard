import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Spring } from "react-spring";
const StyledTimeinterval = styled.div`
    display: flex;
    flex-direction: row;
    span {       
        font-size: 16px;
        color: ${props => props.theme.color};
        margin: 0.2rem 0.3rem;
        font-weight: 600;
        cursor: pointer;
    }& :: after{
        content: ' | '
    }
`
class TimeInterval extends Component {
    render() {
        const { times, handleClick } = this.props;
        return (
            <StyledTimeinterval>
                {times.map((time, i) => {
                    return (
                        <Spring 
                            delay={500}
                            from={{ transform: 'translate3d(400px,0,0) scale(2) rotateX(90deg)', }}
                            to={{ transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)' }}>
                            {styles => (
                                <span
                                    style={styles}
                                    key={i}
                                    onClick={(e) => handleClick(time)}>
                                    {time.value}
                                </span>
                            )}
                        </Spring>
                    )
                })}
            </StyledTimeinterval>
        )
    }
}

TimeInterval.propTypes = {
    times: PropTypes.array
}

export default TimeInterval;
