import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Select, Input, Button, Icon, } from 'antd';
const Option = Select.Option;

class SecondArrayForm extends Component {
    constructor(props){
        super(props)
      
        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
    }

    renderInput = ({input, label, type, meta: {touched, error}, ...custom}) => {
        return <div>
            <label><label>
            <Input 
            {...input} 
            {...custom} 
            />   
            {touched && error && <span>{error}</span>} 
        </div>
    }
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
