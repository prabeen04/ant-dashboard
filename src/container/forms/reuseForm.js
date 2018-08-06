import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class ReuseForm extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReuseForm);