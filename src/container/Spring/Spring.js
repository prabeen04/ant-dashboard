import React, { Component } from 'react'
import { Spring } from 'react-spring'
import SpringTransition from "./SpringTransition";
class Spring_ extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Spring component</h1>
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                    {props => <div style={props}>hello</div>}
                </Spring>
                <SpringTransition/>
            </React.Fragment>
        )
    }
}

export default Spring_;