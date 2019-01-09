import React, { Component } from 'react'
import { Spring } from 'react-spring'
import SpringTransition from "./SpringTransition";
import SpringTrail from "./SpringTrail";
class Spring_ extends Component {
    render() {
        return (
            <React.Fragment>
                <Spring                
                    from={{ number: 0 }}
                    to={{ number: 100 }}>
                    {props => <h1>{props.number.toFixed()}</h1>}
                </Spring>
                <SpringTransition />
                <SpringTrail />
            </React.Fragment>
        )
    }
}

export default Spring_;