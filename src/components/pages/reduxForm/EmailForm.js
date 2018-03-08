import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { PropTypes } from 'prop-types';
// import PhoneBookEntryDataDisplay from '../phonebook/PhoneBookDataDisplay';

// This is a test action
export const actionTest = formData => ({
  type: 'test------Action',
  payload: formData,
});


// outside your render() method
const renderField = field => (
  <div className="input-row">
    <label htmlFor={field.input.name}>{field.input.name}s</label>
    <input {...field.input} type="text" name={field.input.name} />
    {field.meta.active === true ? <span> (active)</span> : <span>(not active)</span> }
    {field.meta.error ? <span>{field.meta.error}</span> : <span>under</span> }
  </div>
);

const validate = (values) => {
  const errors = {};
  if (!values.FirstName) {
    errors.FirstName = 'Required';
  } else if (values.FirstName.length > 3) {
    errors.FirstName = 'Must be 3 characters or less';
  }

  return errors;
};

const EmailForm = (props) => {
  const submit = (v, dispatch) => {
    console.log(v, props);

    return dispatch(actionTest(v));
  };
  // const { handleSubmit } = props;
  return (
    <form onSubmit={props.handleSubmit(submit)}>
      {console.log(props)}
      <div>
        <Field
          component={renderField}
          namex="Thisismyname"
          name="FirstName"
          type="text"
        />
        <button disabled={!props.valid} type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'contact',
  validate,
  // fields: ['firstName', 'lastName', 'email'],
})(EmailForm);

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  // name: PropTypes.string.isRequired,
  // submitting: PropTypes.bool.isRequired,
};

