import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import TeamStage from './teamStage';
import ChampStage from './champStage';
import RelStage from './relStage';
import './drag.css';

function Drag(props) {
  const stages = useSelector(({ dragReducer }) => dragReducer.stages)
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drag-wrapper">
        {
          stages.map((stage, index) => {
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
export default Drag;