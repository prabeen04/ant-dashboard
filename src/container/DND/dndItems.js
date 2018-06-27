import React, { Component } from 'react'
import './dnd.css';

class DndItems extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="dnd-items">
        <h2>DndItems Component</h2>
        {this.props.items.map(item => <p key={item.id}>{item.value}</p>)}
      </div>
    )
  }
}
export default DndItems