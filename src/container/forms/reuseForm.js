import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import TextInput from '../../components/common/forms/textInput';
class ReuseForm extends Component {
    onSubmit = values => console.log(values)
    renderInput = ({input, meta, label}) => (
        <div >
            <label>{label}</label>
            <TextInput  {...input} />
        </div>
    )
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field name="field1" component={this.renderInput} label='Field1'/>
                    <Field name="field2" component={this.renderInput} label='Field2' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
ReuseForm = reduxForm({
    form: 'reuseForm'
})(ReuseForm)

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ReuseForm);