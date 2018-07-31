import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";
import { Modal, Button } from 'antd';
import { closeFormModal, newOptionCreate } from "../../../actions/selectAction";
import TextInput from '../../../components/common/forms/textInput';
import '../settings.css'
class SelectFormModal extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit = (values) => {
        console.log(values)
        this.props.newOptionCreate(values.newValue)
    }
    renderInput = ({ input }) => {
        return <TextInput
            {...input}
            onChange={(value) => input.onChange(value)}
            value={input.value}
            onBlur={() => input.onBlur(input.value)}
        />
    }
    render() {
        const { handleSubmit, isFormModalOpen, currentValue, newOptionCreate, newCreatedValue, closeFormModal } = this.props;
        return (
            <div>
                <Modal
                    visible={isFormModalOpen}
                    title="Title"
                    style={{ width: 1000 }}
                    onCancel={this.props.closeFormModal}
                    footer={null}
                >
                    <div className="form-modal">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <div className="form-items">
                                <Field
                                    name='newValue'
                                    component={this.renderInput}
                                />
                            </div>

                            <div className="form-buttons">
                                <Button key="back" onClick={closeFormModal}>Return</Button>&nbsp;&nbsp;
                                <Button htmlType="submit" type="primary">Submit</Button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

SelectFormModal = reduxForm({
    form: 'selectForm',
    enableReinitialize: true
})(SelectFormModal)

const mapStateToProps = state => {
    return {
        isFormModalOpen: state.selectReducer.isFormModalOpen,
        currentValue: state.selectReducer.currentValue,
        newCreatedValue: state.selectReducer.newCreatedValue,
        initialValues: {
            newValue: state.selectReducer.newCreatedValue,
        }
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        closeFormModal,
        newOptionCreate
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectFormModal);