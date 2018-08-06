import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const renderCalcField = ({ input, label, type, meta: { touched, error }, calc }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} value={calc()} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)
const products = [
    { id: '0', name: 'Product One', singlePrice: 101, standardQuantity: 1 },
    { id: '1', name: 'Product Two', singlePrice: 39, standardQuantity: 6 },
    { id: '2', name: 'Product Three', singlePrice: 85, standardQuantity: 4 },
    { id: '3', name: 'Product Four', singlePrice: 1, standardQuantity: 20 }
];
const renderCompetences = ({ fields, meta: { touched, error, submitFailed }, products, productSelectValue }) => {
    return (
        <div>
            <ul>
                {fields.map((competence, index) =>
                    <li key={index}>
                        <h4>Competence #{index + 1}</h4>
                        <Field
                            name={`${competence}.singlePrice`}
                            type="number"
                            component={renderField}
                            label="Single Price"
                            onChange={() => {
                                const current = fields.get(index);
                                current.totalPrice = current.singlePrice * current.standardQuantity;
                                fields.remove(index);
                                fields.insert(index, current);
                            }}
                        />
                        <Field
                            name={`${competence}.standardQuantity`}
                            type="number"
                            component={renderField}
                            label="Standard Quantity"
                        />
                        <Field
                            name={`${competence}.totalPrice`}
                            type="number"
                            component={renderCalcField}
                            props={{
                                calc: () => {
                                    const current = fields.get(index);
                                    return current.singlePrice * current.standardQuantity;
                                }
                            }}
                            label="Total Price"
                        />

                        <button
                            type="button"
                            onClick={() => fields.remove(index)}
                            style={{ color: 'red' }}
                        >
                            ✘
                      </button>
                    </li>
                )}
            </ul>
            <div>
                <Field name="productSelect" component="select">
                    <option>Select product</option>
                    {products.map(p => <option value={p.id}>{p.name}</option>)}
                </Field>
                <button type="button" onClick={() => {
                    const selectedProduct = products.find(p => p.id === productSelectValue);
                    fields.push(selectedProduct);
                }}>Add</button>
                {(touched || submitFailed) && error && <span>{error}</span>}
            </div>
        </div>
    );
}

const FieldArraysForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, products, productSelectValue } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field name="recipientName" type="text" component={renderField} label="Recipient Name" />
            <FieldArray name="competences" component={renderCompetences} props={{ products, productSelectValue }} />
            <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

const selector = formValueSelector('fieldArrays');

const mapStateToProps = (state) => {
    const productSelectValue = selector(state, 'productSelect');
    return { productSelectValue };
};

export default compose(
    connect(mapStateToProps),
    reduxForm({
        form: 'fieldArrays'
    })
)(FieldArraysForm);
