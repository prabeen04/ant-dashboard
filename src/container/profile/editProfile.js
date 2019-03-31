import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Icon } from 'antd'
import { updateProfile } from '../../actions/profile_actions';
import { StyledCard } from "../../components/UI/Antd";
import { Input } from "../../components/UI/Elements";
import './profile.css'

class EditProfile extends Component {

  renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
    return <div>
      <Input
        placeholder={label}
        {...input}
        {...custom}
      />
    </div>
  }
  submitProfile = (values) => {
    console.log(values)
    this.props.updateProfile(values)
    this.props.reset();
  }

  render() {
    const { handleSubmit, pristine, reset } = this.props
    return (
      <div className="add-profile profile-view">
        <div className="panel-header">
          <h3>{this.props.initialValues.name ? this.props.initialValues.name : 'EDIT'}</h3>
        </div>
        <StyledCard>
          <form onSubmit={handleSubmit(this.submitProfile)}>
            <Field component={this.renderInput} label={'Name'} name="name" />
            <Field component={this.renderInput} label={'Email'} name="email" />
            <Field component={this.renderInput} label={'Location'} name="location" />
            <Button htmlType="submit" type="primary" loading={this.props.isSubmitting}>
              Update
        </Button>
          </form>
        </StyledCard>
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
    initialValues: state.profileReducer.singleProfile,
    isSubmitting: state.profileReducer.isSubmitting
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateProfile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
