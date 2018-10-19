import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTimeinterval = styled.div`
    display: flex;
    flex-direction: row;
    span {       
        font-size: 16px;
        color: ${props => props.theme.color};
        margin: 0.2rem 0.3rem;
        font-weight: 600;
        cursor: pointer;
    }
`
class TimeInterval extends Component {
    render() {
        const { times, handleClick } = this.props;
        return (
            <StyledTimeinterval>
                {times.map((time, i) => {
                    return (
                        <span 
                            key={i}
                            onClick={(e) => handleClick(time)}>
                            {time.value}
                        </span>
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
