import React, { Component } from 'react';
import { dragSource, dropTarget } from 'react-dnd';
import { flow } from 'lodash';

function collect(){

}
function collect(){
    
}
class DndSort extends Component {
  render() {
    return (
      <div>
        <h2>DndSort Component</h2>
      </div>
    )
  }
}
export default flow([
    DragSource('sort',cardSource, collect ),
    DropTarget('sort',cardTarget, collect1)]
  )(YourComponent);