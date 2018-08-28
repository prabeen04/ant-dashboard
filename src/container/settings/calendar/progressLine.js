import React, { Component } from 'react'
import './progressLine.css';

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
          <div className="progressLine">
          {
            this.state.data.map((item, index) => {
              return <p key={index}>{item.title}</p>
            })
          }
          </div>
      </div>
    )
  }
}

export default ProgessLine;