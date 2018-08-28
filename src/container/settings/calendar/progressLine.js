import React, { Component } from 'react'
import './progressLine.css';

class ProgessLine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { title: 'value1', progress: 10 },
        { title: 'value2', progress: 15 },
        { title: 'value3', progress: 10 },
        { title: 'value4', progress: 25 },
        { title: 'value5', progress: 30 },
        { title: 'value6', progress: 10 },
      ]
    }
  }
  handleClick = (item) => {
    alert(item.title)
  }
  render() {
    const progressRender = this.state.data.map((item, index) => {
      const flexBasis = `${item.progress}%`
      return (<div
        key={index}
        className="progress-item"
        style={{ flexBasis }}
        onClick={() => this.handleClick(item)}>
        {item.title}
      </div>)
    })
    return (
      <div className="progress-line-wrapper">
        <div className="progress-line">
          {progressRender}
        </div>
      </div>
    )
  }
}

export default ProgessLine;