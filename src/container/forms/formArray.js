import React, { Component } from 'react';
import { Form, Input, Icon, Button  } from 'antd';
const FormItem = Form.Item;
let uuid = 0;
class FormArray extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);       
    }
  
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
          return;
        }
    
        // can use data-binding to set
        form.setFieldsValue({
          keys: keys.filter(key => key !== k),
        });
      }
    
      add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
          keys: nextKeys,
        });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
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