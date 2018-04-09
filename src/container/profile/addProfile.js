import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

class AddProfile extends Component {
  render() {
    return (
      <div className="add-profile">
       AddProfile
      </div>
    )
  }
}

AddProfile = connect(mapStateToProps, mapDispatchToProps)(AddProfile)
export default reduxForm({
  form: addProfileForm
})(AddProfile);