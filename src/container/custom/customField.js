import React, { Component } from 'react'
import { Button } from 'antd'
import './customField.css'

class CustomField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' ',
            email: '',
            phone: '',
            fields: [
                { type: 'text', name: 'name' },
                { type: 'email', name: 'email' },
                { type: 'number', name: 'phone' }
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
                return <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'email') {
                return <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            }
            if (field.type === 'number') {
                return <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.name}
                    className="custom-field-input"
                    value={this.state.number}
                    onChange={this.handleChange}
                />
            }
            // <input
            //     key={index}
            //     type={field.type}
            //     name={field.name}
            //     placeholder={field.name}
            //     className="custom-field-input"
            //     value={(field.name === 'name')? this.state.name: (field.name === 'email') ? this.state.email : (field.name === 'phone') ?this.state.phone : 'sdf' }
            //     onChange={this.handleChange}
            // />
            // )
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