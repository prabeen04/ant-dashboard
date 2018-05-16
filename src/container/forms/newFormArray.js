import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Select, DatePicker } from 'antd'
import {validate} from './validate';

class ReduxFormArray extends Component {
    constructor(props) {
        super(props)
    }
    onSubmit = values => {
        console.log(JSON.stringify(values))

    }
   
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <button>submit</button>
                </form>
            </div>
        )
    }
}


ReduxFormArray = reduxForm({
    form: 'newFormArray',
    validate
})(ReduxFormArray)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormArray)
