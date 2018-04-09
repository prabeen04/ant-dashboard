import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'antd'

class AddProfile extends Component {
  constructor(props){
    super(props)
  }

  renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
    return <Input 
                placeholder={label}
                {...input}
                {...custom}

                />
  }
  render() {
    return (
      <div className="add-profile">
       AddProfile
       <Field component={this.renderInput} label={'Your Name'} name="name" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    // addProfile
  }, dispatch)
}
AddProfile = connect(mapStateToProps, mapDispatchToProps)(AddProfile)
export default reduxForm({
  form: 'addProfileForm'
})(AddProfile);