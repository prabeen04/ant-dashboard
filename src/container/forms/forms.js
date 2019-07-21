import React, { Component } from 'react';
import { Divider, PageHeader, Typography } from 'antd';
import SimpleForm from "./simpleForm";
import ComplexForm from "./complexForm";
import ReduxForm from './reduxForm';
import FormArray from './formArray';
import ReduxFormArray from './reduxFormArray';
import NewFormArray from './newFormArray';
import ExampleForm from './exampleForm';
import FieldArraysForm from './fieldArraysForm';
import SecondArrayForm from './secondArrayForm';
import ThirdArrayForm from './thirdArrayForm';
import ReuseForm from './reuseForm';
const { Paragraph } = Typography;

class Forms extends Component {
  render() {
    return (
      <div>
        <PageHeader
          onBack={() => null}
          title="Forms"
        />
        {/* <Divider />
          <SimpleForm />
          <Divider />
          <ComplexForm />
          <Divider />
          <ReduxForm />
          <Divider />
          <FormArray />
          <Divider />
          <NewFormArray /> */}
        {/* <FieldArraysForm /> */}
        <Divider />
        <ReduxFormArray />
        <SecondArrayForm />
        <ThirdArrayForm />
        <ReuseForm />
      </div>
    )
  }
}
export default Forms;