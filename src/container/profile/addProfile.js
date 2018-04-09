import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Input } from 'antd'
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
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div className="add-profile">
        <form onSubmit={handleSubmit(this.submitProfile)}>
          <Field component={this.renderInput} label={'Name'} name="name" />
          <Field component={this.renderInput} label={'Description'} name="description" />
          <Field component={this.renderInput} label={'Location'} name="location" />
          <button type="submit">Submit</button>
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