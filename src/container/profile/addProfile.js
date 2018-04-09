import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Icon } from 'antd'
import './profile.css'
import { addProfile } from '../../actions/profile_actions';

class AddProfile extends Component {
  constructor(props) {
    super(props)

    this.renderInput = this.renderInput.bind(this);
    this.submitProfile = this.submitProfile.bind(this);
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
  submitProfile = (values) =>{
    console.log(values)
    this.props.addProfile(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    console.log(submitting)
    return (
      <div className="add-profile">
        <form onSubmit={handleSubmit(this.submitProfile)}>
          <Field component={this.renderInput} label={'Name'} name="name" />
          <Field component={this.renderInput} label={'Email'} name="email" />
          <Field component={this.renderInput} label={'Location'} name="location" />
          <Button htmlType="submit" type="primary" loading={submitting}>
          Click me!
        </Button>
       { console.log(submitting)}
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addProfile
  }, dispatch)
}
AddProfile = connect(mapStateToProps, mapDispatchToProps)(AddProfile)
export default reduxForm({
  form: 'addProfileForm'
})(AddProfile);