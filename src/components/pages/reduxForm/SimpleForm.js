import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength15, minLength8, required } from '../../../utils/validationRules';

const customSubmit = (values) => {
  console.log('customSubmit', values);
};

const renderField = ({
 meta, input, placeholder, label, type, meta: { touched, error, warning },
}) => (
  <div>
    <label htmlFor={label}>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} style={{ border: meta.active ? '4px solid orange' : '4px solid yellow' }} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const SimpleForm = (props) => {
  const {
 handleSubmit, pristine, reset, submitting 
} = props;
  return (
    <form onSubmit={handleSubmit(customSubmit)}>
      <div>
        <div>
          <Field
            name="firstName"
            component={renderField}
            type="text"
            placeholder="First Name"
            label="First Name label"
            validate={[required, maxLength15, minLength8]}
          />
        </div>
      </div>
      <div>
        <div>
          <Field
            name="lastName"
            component={renderField}
            type="text"
            placeholder="Last Name"
            label="Last Name label"
            validate={[required, maxLength15, minLength8]}
          />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required firstName';
  }
  if (!values.lastName) {
    errors.lastName = 'Required lastName';
  }
  return errors;
};

export default reduxForm({
  form: 'simple',
})(SimpleForm);
