import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, FieldArray, formValueSelector } from 'redux-form';
// import { validateSecondArray } from './validation/secondArrayValidate';
import { Select, Input, InputNumber, Button, Icon, } from 'antd';
import './form.css';
const Option = Select.Option;

class ThirdArrayForm extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.renderMembers = this.renderMembers.bind(this);
        this.renderChildMembers = this.renderChildMembers.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.renderInputNumber = this.renderInputNumber.bind(this);
    }
    onSubmit = (values) => {
        console.log(values)
    }
    renderOptions = () => {
        // return this.props.teams.map((team, index) => {
        //     return <option key={index} value={team.team}>{team.team}</option>
        // })
    }

    renderInputNumber = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <input
                    placeholder={label}
                    {...input}
                    {...custom}
                    min={0}
                    max={100}
                    type="number"
                    style={{border: '1px solid #ccc', width: 200,height: 32, borderRadius: 4 }}
                />
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        // console.log(input)
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
            <select
                {...input}
                {...custom}
                style={{border: '1px solid #ccc', width: 200,height: 32, borderRadius: 4 }}
            >
                {this.renderOptions()}
            </select>
            {touched && error && <span>{error}</span>}
        </div>
    }
    renderMembers = ({ change, fields, meta: { error, submitFailed } }) => (
        <div>
            {fields.map((member, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <div className="array-field">
                        <Field
                            name={`${member}.select1`}
                            component={this.renderSelect}
                            label="select1"
                        />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field2`} component={this.renderInput} label="field2" />
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field3`} component={this.renderInput} label="field3"  />
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field4`} component={this.renderInputNumber} label="field4"  />
                    </div>
                    <div className="array-field">
                    <FieldArray
                        name={`${member}.childMember`}
                        component={this.renderChildMembers}
                    />
                    </div>
                    <button
                        type="button"
                        onClick={() => fields.remove(index)} >
                        delete
                    </button>
                </div>
            ))}
            <div className="">
                <button
                    type="button"
                    onClick={() => fields.push({})}
                >add
                </button>
                {submitFailed && error && <span>{error}</span>}
            </div>
        </div>
    );
    renderChildMembers = ({ change, fields, meta: { error, submitFailed } }) => (
        <div>
            {fields.map((member, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <div className="array-field">
                        <Field name={`${member}.field2`} component={this.renderInput} label="field2" disabled style={{ backgroundColor: '#eee', color: '#444' }} />
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field3`} component={this.renderInput} label="field3" disabled />
                    </div>
                    <button
                        type="button"
                        onClick={() => fields.remove(index)} >
                        delete
                    </button>
                </div>
            ))}
            <div className="">
                <button
                    type="button"
                    onClick={() => fields.push({})}
                >add
                </button>
                {submitFailed && error && <span>{error}</span>}
            </div>
        </div>
    );
    componentWillReceiveProps(nextProps, x) {
        //console.log(nextProps)
    }
    render() {
        const { handleSubmit, submitting } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <FieldArray
                        name='member'
                        component={this.renderMembers}
                    />
                    <br />

                    <Button type="primary" htmlType="submit">Submit</Button>
                </form>
            </div>
        )
    }
}

ThirdArrayForm = reduxForm({
    form: 'thirdReduxForm',
})(ThirdArrayForm)

const mapStateToProps = (state, props) => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ThirdArrayForm)
