import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPresentNotifications } from '../../actions/notificationActions';

class PresentNotification extends Component {
  componentDidMount(){
    this.props.getPresentNotifications();
  }
  render() {
    return (
      <div>
        {this.props.isFetching && <p>Loading...</p>}
      </div>
    )
  }
}
const mapStateToProps = state => {
 return{
   isFetching: state.notificationReducer.isFetching
 }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      getPresentNotifications
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PresentNotification);