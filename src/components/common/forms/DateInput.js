import React, { Component } from 'react'
import { DatePicker } from "antd";
import './forms.css';

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