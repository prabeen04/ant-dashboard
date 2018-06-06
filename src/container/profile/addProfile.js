import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Input, Button, Icon, Card, Upload, message } from 'antd'
import './profile.css'
import { addProfile } from '../../actions/profile_actions';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

class AddProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    };
    this.renderInput = this.renderInput.bind(this);
    this.submitProfile = this.submitProfile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
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
  submitProfile = (values) => {
    console.log(values)
    this.props.addProfile(values)
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    const { handleSubmit, pristine, reset, submitting } = this.props
    console.log(submitting)
    return (
      <div className="add-profile">
        <div className="panel-header">
          <h3>Add Profiles</h3>
        </div>
        <Card>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="//jsonplaceholder.typicode.com/posts/"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
          </Upload>
          <form onSubmit={handleSubmit(this.submitProfile)}>
            <Field component={this.renderInput} label={'Name'} name="name" />
            <Field component={this.renderInput} label={'Email'} name="email" />
            <Field component={this.renderInput} label={'Location'} name="location" />
            <Button htmlType="submit" type="primary" loading={submitting}>
              Click me!
        </Button>
            {console.log(submitting)}
          </form>
        </Card>
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