import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

export class ReduxForm extends Component {

  render() {
    return (
      <div>
        <h2>Redux Form created</h2>
      </div>
    )
  }
}

ReduxForm = reduxForm({
    form: 'reduxForm'
})(ReduxForm);

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm)
