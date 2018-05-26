import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, FieldArray } from 'redux-form';

class SecondArrayForm extends Component {

  render() {
    return (
      <div>
        <h1>SecondArrayForm</h1>
      </div>
    )
  }
}
SecondArrayForm = reduxForm({
    form: 'secondReduxForm',
    // validate
})(SecondArrayForm)

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondArrayForm)
