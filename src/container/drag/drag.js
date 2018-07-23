import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import TeamStage from './teamStage';
import ChampStage from './champStage';
import './drag.css';

class Drag extends Component {
  render() {
    return (
      <div>
        <div className="drag-wrapper">
          {
            this.props.stages.map((stage, index) => {
              return <TeamStage key={index} stage={stage} />
            })
          }
        </div>
        <ChampStage/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    stages: state.dragReducer.stages
  }
}
Drag = DragDropContext(HTML5Backend)(Drag);
export default connect(mapStateToProps)(Drag);