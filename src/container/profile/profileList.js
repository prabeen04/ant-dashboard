import React, { Component } from 'react'
import ProfileCard from './profileCard'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProfileList extends Component {
  render() {
    return (
      <div>
       ProfileList
       <ProfileCard/>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return{
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        getProfiles
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);