import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import TeamStage from './teamStage';
import _ from 'lodash';
import './drag.css';

class Drag extends Component {
  render() {
    const { teams } = this.props;
    let teamGroup = _.groupBy(teams, 'stage');
    console.log(teamGroup)
    const renderStage = Object.keys(teamGroup)
    console.log(renderStage)
    return (
      <div className="drag-wrapper">
        {/* {
          this.props.teams.map((team, index) => {
            if (team.stage == 'cl') {
              return <TeamStage key={index} team={team} backgroundColor={'red'} />
            }
            if (team.stage == 'el') {
              return <TeamStage key={index} team={team} backgroundColor={'green'} />
            }
            if (team.stage == 'th') {
              return <TeamStage key={index} team={team} backgroundColor={'lightblue'} />
            }
            if (team.stage == 'bh') {
              return <TeamStage key={index} team={team} backgroundColor={'orange'} />
            }
            if (team.stage == 'rel') {
              return <TeamStage key={index} team={team} backgroundColor={'cyan'} />
            }
          })
        } */}
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