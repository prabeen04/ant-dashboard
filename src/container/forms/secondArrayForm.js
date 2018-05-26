import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { validateSecondArray } from './validation/secondArrayValidate';
import { Select, Input, InputNumber, Button, Icon, } from 'antd';
const Option = Select.Option;

class SecondArrayForm extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.onSubmit = this.onSubmit.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.renderMembers = this.renderMembers.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.fillData = this.fillData.bind(this);
        this.renderInputNumber = this.renderInputNumber.bind(this);
    }
    onSubmit = (values) => {
        console.log(values)
    }
    renderOptions = () => {
        return this.props.teams.map(( team, index) => {
            return <Option key={index} value={team.team}>{team.team}</Option>
        })
    }
    fillData = (member, value) => {
        console.log(member, value)
 
        this.props.teams.forEach((team, index ) => {
            if(team.team === value){
                console.log('team matched', index)
                this.props.change(`${member}field2`,team.team)
                this.props.change(`${member}field3`, team.captain)
                this.props.change(`${member}field4`, team.trophy)
            }
        })

        // this.props.teams.map((team, index )=>{
        //     if(team.value === 'manutd'){
        //         this.props.change(`${member}field2`, 'alaja')
        //         this.props.change(`${member}field3`, '464356')
        //         this.props.change(`${member}field4`, 'sgsdgd')
        //     }
        // })
    }
    renderInputNumber = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <InputNumber
                    placeholder={label}
                    {...input}
                    {...custom}
                    min={0}
                    max={100}
                // type="number"
                // defaultValue={this.state.amount}
                // onChange={this.handleCurrencyCalculation}
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
    renderSelect = ({ input, label, type,change,  meta: { touched, error }, ...custom }) => {
        return <div>
            <label>{label}</label>
            <Select
                {...input}
                {...custom}
               
            >
            {this.renderOptions()}
                {/* <Option value="manutd">Manutd</Option>
                <Option value="arsenal">Arsenal</Option>
                <Option value="chelsea">Chelsea</Option> */}
            </Select>
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
                            onChange = {(e, value) =>{
                                this.fillData(member, value)
                                // change(`${member}.field2`, 'kjgk');
                                // change(`${member}.field3`, 'this.handleCurrencyCalculation(value, fields.get(index))');
                                //  change(`${member}.field4`, 'd');
                            }}
                        />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field2`} component={this.renderInput} label="field2"disabled style={{backgroundColor: '#eee', color: '#444'}}/>
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field3`} component={this.renderInput} label="field3" disabled/>
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field4`} component={this.renderInputNumber} label="field4"disabled />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field5`} component={this.renderInputNumber} label="field5" 
                        onChange={(e, value) => {
                            console.log(e);
                            console.log(value);
                        }}/>
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field6`} component={this.renderInput} label="field6" />
                    </div>

                    {/* <div>
                        <Upload {...uploadProps}>
                            <Button>
                                <Icon type="upload" /> Click to Upload
                            </Button>
                        </Upload>
                    </div> */}
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

    render() {
        const { handleSubmit, submitting, change } = this.props;
        return (
            <div>
                <h1>SecondArrayForm</h1>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        name='team'
                        label='Team'
                        component={this.renderInput}
                    />
                    <Field
                        name='league'
                        label='League'
                        component={this.renderSelect}
                    />
                    <FieldArray
                        name='member'
                        component={this.renderMembers} 
                        change = {change}/>
                    <br />
                    <Button type="primary" htmlType="submit">Submit</Button>
                </form>
            </div>
        )
    }
}
SecondArrayForm = reduxForm({
    form: 'secondReduxForm',
    validate: validateSecondArray
})(SecondArrayForm)

const mapStateToProps = (state) => ({
    teams: state.secondArrayReducer
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondArrayForm)