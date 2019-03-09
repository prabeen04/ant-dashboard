import React, { useState } from 'react'
import { Button } from 'antd';
import { reduxForm, Field } from "redux-form";
import { getLatLng, geocodeByAddress } from 'react-places-autocomplete';
import { Input } from '../../components/UI/Elements';
import TextInput from '../../components/common/forms/textInput';
import PlaceInput from '../../components/common/forms/placeInput';
import UploadInput from '../../components/common/forms/uploadInput';
import GoogleMap from '../../components/google/googleMap';
import SwitchInput from "../../components/common/forms/switchInput";

// class ReuseForm extends Component {
//     constructor(props) {
//         super(props)

//         state = {
//             latLng: null
//         }
//     }

function ReuseForm(props) {
    const { handleSubmit } = props;
    const onSubmit = values => console.log(values)

    const handleSelect = address => {
        console.log(props, address)
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                console.log('Success', latLng)
                // setState({
                //     latLng
                // })
            })
            .then(() => props.change('location', address))
            .catch(error => console.error('Error', error));
    };
    const renderInput = ({ input, meta, width, label, ...custom }) => (
        <div style={{ width }}>
            <Input  {...input} {...custom} />
        </div>
    )
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field
                    name="field1"
                    component={renderInput}
                    label='Event'
                    placeholder="Enter Event"
                    width={400}
                />
                <br />
                <Field
                    name="location"
                    component={PlaceInput}
                    label='Enter Event Location'
                    width={400}
                    onSelect={handleSelect} />
                <Field
                    name="image"
                    component={UploadInput}
                />
                <Button type="primary" htmlType="submit" >Submit</Button>
            </form>
            <div style={{ marginTop: '0.5rem' }}>
                <GoogleMap latLng={latLng} />
            </div>
        </div>
    )
}
// }
ReuseForm = reduxForm({
    form: 'reuseForm'
})(ReuseForm)

export default ReuseForm;