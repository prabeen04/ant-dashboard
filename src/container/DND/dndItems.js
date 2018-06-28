import React, { Component } from 'react';
import Item from './item';
import './dnd.css';

const DndItems = (props) => {
  return (
    <div className="dnd-items">
      <h2>DndItems Component</h2>
      {props.items.map(item => <Item item={item} key={item.id} handleDrag={props.handleDrag} />)}
    </div>
  )
}
export default DndItems