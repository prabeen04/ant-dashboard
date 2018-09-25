import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeInterval extends Component {
    render() {
        const { times } = this.props;
        return (
            <div style={styles.timeInterval}>
                {times.map((time, i) => {
                    return <p style={styles.timeItem}>{time}</p>
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
        borderColor: '#666'
    },
    timeItem: {
        padding: 5,
        fontSize: 16,
        fontWeight: 300
    }
}