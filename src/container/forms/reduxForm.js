import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Icon, Select, Checkbox, Button } from 'antd';

export class ReduxForm extends Component {
    constructor(props) {
        super(props)

        this.renderInput = this.renderInput.bind(this);
    }

    renderInput = (label, input, meta) => {
        return <Input {...input} placeholder={label}/>
}
render() {
    const { handleSubmit } = this.props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field
                    name="testInput"
                    label="Test Input"
                    component={this.renderInput}
                />
            </form>
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
