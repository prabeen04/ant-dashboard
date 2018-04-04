import React, { Component } from 'react'
import {Card} from 'antd';

const gridStyle = {
    width: '16%',
    textAlign: 'center',
  };
class CardGrid extends Component {
  render() {
    return (
      <div>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
      </div>
    )
  }
}

export default CardGrid;