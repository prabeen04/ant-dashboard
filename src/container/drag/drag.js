import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import TeamStage from './teamStage';
import ChampStage from './champStage';
import RelStage from './relStage';
import './drag.css';

class Drag extends Component {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="drag-wrapper">
          {
            this.props.stages.map((stage, index) => {
              return <TeamStage key={index} stage={stage} />
            })
          }
        </div>
        <div className="final-stage">
          <ChampStage />
          <RelStage />
        </div>
      </DndProvider>
    )
  }
}
const mapStateToProps = state => {
  return {
    stages: state.dragReducer.stages
  }
}
export default connect(mapStateToProps)(Drag);