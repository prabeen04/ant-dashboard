import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeInterval extends Component {
    render() {
        const { times } = this.props;
        return (
            <div>
                {times.map((time, i) => {
                    return <div className="time-interval" key={i}>
                        <p>{time}</p>
                    </div>
                })}
            </div>
        )
    }
}

TimeInterval.propTypes = {
    times: PropTypes.array
}

export default TimeInterval;