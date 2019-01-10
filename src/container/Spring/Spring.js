import React, { Component } from 'react'
import { Spring } from 'react-spring'
import SpringTransition from "./SpringTransition";
import SpringTrail from "./SpringTrail";
import AnimatedIcons from './AnimatedIcons'
class Spring_ extends Component {
    render() {
        return (
            <React.Fragment>
                <AnimatedIcons />
                <SpringTransition />
                <SpringTrail />
            </React.Fragment>
        )
    }
}

export default Spring_;