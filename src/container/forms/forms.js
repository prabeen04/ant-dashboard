import React, { Component } from 'react';
import { Divider, PageHeader, Typography } from 'antd';
import ComplexForm from "./complexForm";
import FormArray from './formArray';
import ReduxFormArray from './reduxFormArray';
import NewFormArray from './newFormArray';
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
          <ComplexForm />
          <Divider />
          <FormArray />
          <Divider />
          <NewFormArray /> */}
        {/* <FieldArraysForm /> */}
        {/* <Divider /> */}
        {/* <ReduxFormArray /> */}
        {/* <SecondArrayForm /> */}
        {/* <ThirdArrayForm /> */}
        <ReuseForm />
      </div>
    )
  }
}
export default Forms;