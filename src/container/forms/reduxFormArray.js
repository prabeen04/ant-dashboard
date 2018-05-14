import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

class ReduxFormArray extends Component {

    render() {
        return (
            <div>
                <h3>ReduxFormArray Component</h3>
            </div>
        )
    }
}

ReduxFormArray = reduxForm({
    form: 'formArray'
})(ReduxFormArray)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormArray)
