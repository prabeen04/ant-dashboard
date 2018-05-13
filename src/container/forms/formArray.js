import React, { Component } from 'react';
import { Form, Input, Icon, Button  } from 'antd';
const FormItem = Form.Item;

class FormArray extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);    
    }
  
  handleSubmit = ()=>{
    console.log('handlesubmit called')
  }  
  render() {
    const { getFieldDecorator } = this.props.form ;  
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <FormItem>
                {getFieldDecorator('test',{

                })(
                    <Input/>
                )}
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
        </Form>    
      </div>
    )
  }
}

FormArray = Form.create()(FormArray)
export default FormArray;