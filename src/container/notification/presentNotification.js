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
        
      </div>
    )
  }
}
const mapStateToProps = state => {
 return{
   
 }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      getPresentNotifications
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PresentNotification);