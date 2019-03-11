import React, { Component } from 'react'
import { DatePicker } from "antd";
import './forms.css';

export default function DateInput(props) {
    return (
        <div>
            <DatePicker {...props} />
        </div>
    )
}
