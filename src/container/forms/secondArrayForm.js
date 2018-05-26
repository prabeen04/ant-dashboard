import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { Select, Input, Button, Icon, } from 'antd';
const Option = Select.Option;

class SecondArrayForm extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
    }
    onSubmit = (values) => {
        console.log(values)
    }
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return <div>
            <label>{label}</label>
            <Input
                {...input}
                {...custom}
            />
            {touched && error && <span>{error}</span>}
        </div>
    }
    renderSelect = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        return <div>
            <label>{label}</label>
            <Select
             {...input}
                {...custom}
            >
              <Option value="manutd">Manutd</Option> 
              <Option value="arsenal">Arsenal</Option> 
              <Option value="chelsea">Chelsea</Option> 
            </Select>
            {touched && error && <span>{error}</span>}
        </div>
    }
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                <h1>SecondArrayForm</h1>
                <form onSubmit={handleSubmit(this.onSubmit)}>

                </form>    
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
