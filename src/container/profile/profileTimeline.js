import React, { Component } from 'react'
import { connect } from "react-redux";
class ProfileTimeline extends Component {
  render() {
    return (
      <div>
        {this.props.profiles.map((post, index) => {
            return <p>{post.name}</p>
        })}
      </div>
    )
  }
}
const mapStateToProps = state => {
    console.log(state.profileReducer.profiles)
    return{
        profiles: state.profileReducer.profiles
    }
}

export default connect(mapStateToProps)(ProfileTimeline);