import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeInterval extends Component {
    render() {
        const { times, handleClick } = this.props;
        return (
            <div style={styles.timeInterval}>
                {times.map((time, i) => {
                    return (
                        <span 
                            key={i}
                            style={styles.timeItem}
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

const styles = {
    timeInterval: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'red',
        cursor: 'pointer',
        justifyContent: 'center'
    },
    timeItem: {
        fontSize: 16,
        fontWeight: 500,
        backgroundcolor: '#ddd',
        paddingRight: 10
    }
}