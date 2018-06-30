import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndItems from './dndItems';
import DndTarget from './dndTarget';
import DndSort from './dndSort';
import './dnd.css';


class DND extends Component {
  constructor(props) {
    super(props)
    this.handleDrag = this.handleDrag.bind(this);

    this.state = {
      items: [
        { id: 1, value: 'manutd' },
        { id: 2, value: 'chelsea' },
        { id: 3, value: 'mancity' },
        { id: 4, value: 'arsenel' },
        { id: 5, value: 'liverpool' },
        { id: 6, value: 'tottenham' }
      ]
    }
  }
  handleDrag = (id) => {
    console.log(id)
    this.setState(prevState => {
      const items = prevState.items;
      const index = items.findIndex(item => item.id === id)

      items.splice(index, 1)

      return { items }
    });
  }
  render() {
    return (
      <div>
        <div className="dnd-wrapper">
          <DndItems items={this.state.items} handleDrag={this.handleDrag} />
          <DndTarget />
        </div>
        <div className="dnd-items">
          {
            this.state.items.map(item => {
              return <DndSort key={item.id} item={item} />
            })
          }
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(DND);