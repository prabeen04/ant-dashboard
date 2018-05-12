import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfiles } from '../../actions/profile_actions';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './form.css';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class ComplexForm extends Component {
    constructor(props){
        super(props)
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleSelectChange = (value) => {
        console.log(value);
        this.props.form.setFieldsValue({
            team: value
        });
      }
    componentDidMount() {
        console.log('component did mount')
        this.props.getProfiles()
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                   
                >
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                        initialValue: this.props.nickname || 'sdgsdhf'
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Select Something"
                    hasFeedback
                >
                    {getFieldDecorator('team', {
                        rules: [{ required: true, message: 'Please select something' }],
                    })(

                        <Select 
                            placeholder="please selcect an option"
                            onChange={this.handleSelectChange}
                        >   
                            <Option value='test'>Test</Option>                       
                            {this.props.profiles
                            ?this.props.profiles.map(profile => {
                                return <Option key={profile._id} value={profile.name}>{profile.name}</Option>
                            })
            
                         : <Option value="mancity">Manchester City</Option>
                            }
                        </Select>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Select other thing"
                >
                    {getFieldDecorator('other', {
                        rules: [{ required: true, message: 'Please select something' }],
                    })(

                        <Select placeholder="please selcect an option">   
                            <Option value='test'>Test</Option>                       
                            <Option value='afsdf'>Tdgsdkgjhest</Option>                       
                            <Option value="mancity">Manchester City</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        )
    }
}

ComplexForm = Form.create()(ComplexForm);

const mapStateToProps = state => {
    console.log(state.profileReducer)
    return {
        profiles: state.profileReducer.profiles,
        nickname: 'asasg'
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getProfiles: getProfiles
        // setSelectValue: setSelectValue
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ComplexForm);