import React, { Component } from 'react';
import Item from './item';
import './dnd.css';

class DndItems extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="dnd-items">
        <h2>DndItems Component</h2>
        {this.props.items.map(item => <Item item={item} key={item.id}/>)}
      </div>
    )
  }
}
export default DndItems