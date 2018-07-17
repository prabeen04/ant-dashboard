import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFutureNotifications } from '../../actions/notificationActions';
class FutureNotification extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    isFetching: state.notificationReducer.isFetching,
    futureNotifications: state.notificationReducer.futureNotifications,
  }
 }
 const mapDispatchToProps = dispatch => {
   return bindActionCreators({
       getFutureNotifications
   }, dispatch)
 }
 export default connect(mapStateToProps, mapDispatchToProps)(FutureNotification);