import React, { Component } from 'react'
import { DatePicker } from "antd";
import './form.css';

class DateInput extends Component {
    render() {
        return (
            <div>
                <DatePicker className="text-input" {...this.props} />
            </div>
        )
    }
}

export default DateInput;