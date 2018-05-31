import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Icon, Card } from 'antd'
import './profile.css'
import { updateProfile } from '../../actions/profile_actions';

class EditProfile extends Component {
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
    this.props.updateProfile(values)
    this.props.reset();
  }

  componentDidUpdate(){
    // this.props.initialize(this.props.initialValues);
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    console.log(submitting)
    return (
      <div className="add-profile">
      <Card>
        <form onSubmit={handleSubmit(this.submitProfile)}>
          <Field component={this.renderInput} label={'Name'} name="name" />
          <Field component={this.renderInput} label={'Email'} name="email" />
          <Field component={this.renderInput} label={'Location'} name="location" />
          <Button htmlType="submit" type="primary" loading={submitting}>
          Update
        </Button>
       { console.log(submitting)}
        </form>
        </Card>
      </div>
    )
  }
}

EditProfile = reduxForm({
  form: 'editProfileForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  destroyOnUnmount: false
})(EditProfile);

const mapStateToProps = (state) => {
  return {
    initialValues: state.profileReducer.singleProfile
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateProfile
  }, dispatch)
}

EditProfile = connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default EditProfile;
