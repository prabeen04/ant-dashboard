import React, { Component } from 'react'
import './progessLine.css';

class ProgessLine extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: [
                {title: 'value1', progress: 10},
                {title: 'value2', progress: 15},
                {title: 'value3', progress: 10},
                {title: 'value4', progress: 25},
                {title: 'value5', progress: 30},
                {title: 'value6', progress: 10},
            ]
        }
    }
  render() {
    return (
      <div className="progressLine-wrapper">
        <h3>ProgessLine Component</h3>

      </div>
    )
  }
}

export default ProgessLine;