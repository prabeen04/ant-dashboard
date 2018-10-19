import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeInterval extends Component {
    render() {
        const { times, handleClick } = this.props;
        return (
            <div>
                {times.map((time, i) => {
                    return (
                        <span 
                            key={i}
                            onClick={(e) => handleClick(time)}>
                            {time.value}
                        </span>
                    )
                })}
            </div>
        )
    }
}

TimeInterval.propTypes = {
    times: PropTypes.array
}

export default TimeInterval;
