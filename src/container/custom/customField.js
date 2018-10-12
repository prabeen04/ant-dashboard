import React, { Component } from 'react'
import { Button } from 'antd'
import { Input, SelectInput, Option } from "../../components/UI/Elements";
import './customField.css'

class CustomField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' ',
            email: '',
            phone: '',
            location: '',
            fields: [
                { type: 'text', name: 'name' },
                { type: 'email', name: 'email' },
                { type: 'number', name: 'phone' },
                {
                    type: 'select', name: 'location', options: [
                        'bhubaneswar', 'cuttack', 'berhampur', 'puri'
                    ]
                },
            ]
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            'name': this.state.name,
            'email': this.state.email,
            'phone': this.state.phone,
        })
    }
    render() {
        const renderFields = this.state.fields.map((field, index) => {
            // return (
            if (field.type === 'text') {
                return <Input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'email') {
                return <Input
                    key={index}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'number') {
                return <Input
                    key={Input}
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    value={this.state.number}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'select') {
                return <SelectInput
                    key={index}
                    name={field.name}
                    placeholder={field.name}
                    value={this.state.number}
                    onChange={this.handleChange}
                >
                    {field.options.map((option, index) => {
                        return <Option key={index} value={option}>{option}</Option>
                    })}
                </SelectInput>
            }
        })
        return (
            <div className="custom-field-wrapper">
                <h2>CustomField Component</h2>
                <form className="">
                    {renderFields}
                    <Button htmltype="submit" type="primary" onClick={this.handleSubmit}>Send</Button>
                </form>
            </div>
        )
    }
}
export default CustomField;