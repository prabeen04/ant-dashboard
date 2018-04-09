import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'antd'
import './profile.css'

class AddProfile extends Component {
  constructor(props){
    super(props)
  }

  renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
    return <div className="text-input"> 
              <Input 
                placeholder={label}
                {...input}
                {...custom}
                />
            </div>    
  }
  render() {
    return (
      <div className="add-profile">
       <Field component={this.renderInput} label={'Name'} name="name" />
       <Field component={this.renderInput} label={'Description'} name="description" />
       <Field component={this.renderInput} label={'Location'} name="location" />
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