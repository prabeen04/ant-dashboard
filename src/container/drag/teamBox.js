import React, { Component } from 'react'

class TeamBox extends Component {
  render() {
    return (
      <div className="team-box">
        <h3>{this.props.team.name}</h3>
      </div>
    )
  }
}

export default TeamBox;