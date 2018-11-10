import React, { Component } from 'react';
import { Divider } from 'antd';
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
class Forms extends Component {
  render() {
    return (
      <div>
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
          {/* <ExampleForm /> */}
          {/* <FieldArraysForm /> */}
          {/* <Divider /> */}
          <ReduxFormArray />
          {/* <SecondArrayForm /> */}
          {/* <ThirdArrayForm /> */}
          <ReuseForm/>
      </div>
    )
  }
}
export default Forms;