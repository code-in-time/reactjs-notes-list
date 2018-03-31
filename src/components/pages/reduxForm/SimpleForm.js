import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { maxLength15, minLength8, required } from '../../../utils/validationRules';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.firstName)) {
      throw new SubmissionError({
        firstName: 'User does not exist',
        _error: 'Login failed!',
      });
    } else {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
  });
}

const customSubmit = (values) => {
  console.log('customSubmit', values);

  submit(values);
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

const CustomFieldFirstName = props => (
  <Field
      name="firstName"
      component={renderField}
      type="text"
      placeholder="First Name"
      label="First Name label"
      validate={[required, maxLength15, minLength8]}
    />);

const CustomFieldLastName = props => (
  <Field
      name="lastName"
      component={renderField}
      type="text"
      placeholder="Last Name"
      label="Last Name label"
      validate={[required, maxLength15, minLength8]}
  />);

let SimpleForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <div>
          <CustomFieldFirstName {...props} />
        </div>
      </div>
      <div>
        <div>
          <CustomFieldLastName {...props} />
        </div>
      </div>
      <div>
        {props.error && <div>{props.error}</div>}
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

SimpleForm = reduxForm({
  form: 'simple',
  enableReinitialize: true,
})(SimpleForm);

// You have to connect() to any reducers that you wish to connect to yourself
SimpleForm = connect(
  state => ({ initialValues: state.simpleFormReducer }),
  // This was reset in the browser using the redux debugger
  { resetForm: { type: 'resetForm', payload: { firstName: 'xxxxccccccc', lastName: 'vvvvvvbbbbbb' } } },
)(SimpleForm);

export default SimpleForm;
