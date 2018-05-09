import React, { Component } from 'react';
import { Card, Divider } from 'antd';
import SimpleForm from "./simpleForm";
import ComplexForm from "./complexForm";
import ReduxForm from './reduxForm';

class Forms extends Component {
  render() {
    return (
      <div>
        <Card>
          <Divider />
            <SimpleForm />
          <Divider />
            <ComplexForm />
          <Divider />
            <ReduxForm />
          <Divider />
        </Card>
      </div>
    )
  }
}
export default Forms;