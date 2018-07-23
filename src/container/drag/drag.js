import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './drag.css';

class Drag extends Component {
  render() {
    return (
      <div className="drag-wrapper">
        {
          this.props.teams.map((team, index) => <h2 key={index}> { team.name } | </h2>)
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    teams: state.dragReducer.teams
  }
}
Drag = DragDropContext(HTML5Backend)(Drag);
export default connect(mapStateToProps)(Drag);