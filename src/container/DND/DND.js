import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DndItems from './dndItems';
import DndTarget from './dndTarget';
import DndSort from './dndSort';
import './dnd.css';

const update = require('immutability-helper')

class DND extends Component {
  constructor(props) {
    super(props)
    this.handleDrag = this.handleDrag.bind(this);
    this.sortItem = this.sortItem.bind(this);

    this.state = {
      items: [
        { id: 1, value: 'Manutd' },
        { id: 2, value: 'Chelsea' },
        { id: 3, value: 'Mancity' },
        { id: 4, value: 'Arsenal' },
        { id: 5, value: 'Liverpool' },
        { id: 6, value: 'Tottenham' },
        { id: 7, value: 'Everton' },
        { id: 8, value: 'Burnley' },
        { id: 9, value: 'West Ham' },
      ]
    }
  }
  // delete on drag drop 
  handleDrag = (id) => {
    console.log(id)
    this.setState(prevState => {
      const items = prevState.items;
      const index = items.findIndex(item => item.id === id)

      items.splice(index, 1)

      return { items }
    });
  }

  //sort Items 
  sortItem(dragIndex, hoverIndex) {
    console.log('inside sortItem')
    const { items } = this.state
    const dragCard = items[dragIndex]

    this.setState(
      update(this.state, {
        items: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="dnd-wrapper">
          <DndItems items={this.state.items} handleDrag={this.handleDrag} />
          <DndTarget />
        </div>
        <div className="dnd-items">
          {
            this.state.items.map((item, index )=> {
              return <DndSort key={item.id} index={index} item={item} moveItem={this.sortItem}/>
            })
          }
        </div>
      </DndProvider>
    )
  }
}

export default DND;