import React, { Component } from 'react'
import './progressLine.css';

class ProgessLine extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        { id: 1, title: 'value1', progress: 10, loading: false, touched: false },
        { id: 2, title: 'value2', progress: 15, loading: false, touched: false },
        { id: 3, title: 'value3', progress: 10, loading: false, touched: false },
        { id: 4, title: 'value4', progress: 25, loading: false, touched: false },
        { id: 5, title: 'value5', progress: 30, loading: false, touched: false },
        { id: 6, title: 'value6', progress: 10, loading: false, touched: false },
      ]
    }
  }
  handleClick = (item) => {
    let newData = this.state.data.map((element, index) => {
      return element.id === item.id ? { ...element, loading: true, touched: true } : element
    }
    )
    this.setState({
      data: newData
    })

  }
  render() {
    const renderProgress = this.state.data.map((item, index) => {
      const flexBasis = `${item.progress}%`
      const backgroundColor = item.touched ? 'rgb(1, 172, 30)' : '#fff';
      const color = item.touched ? '#fff' : '#444';
      return (<div
        key={index}
        className="progress-item"
        style={{ flexBasis, backgroundColor, color }}
        onClick={() => this.handleClick(item)}>
        {item.title}
        {/* {item.loading ? 'Loading...' : item.title} */}
      </div>)
    })
    return (
      <div className="progress-line-wrapper">
        <div className="progress-line">
          {renderProgress}
        </div>
      </div>
    )
  }
}

export default ProgessLine;